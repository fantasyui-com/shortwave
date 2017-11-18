
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();



new Vue({
  el: '#primary',

  data: {

    bpm: 256,

    samples: {

      silence: { sound:'', icon:'' },
         slam: { sound:'slam.wav', icon:'heart' },
       crunch: { sound:'crunch.wav', icon:'th' },

    },

    cells: [
      [{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},],
      [{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},],
      [{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},],
      [{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},],
      [{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},],
      [{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},],
      [{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},],
      [{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},{active:false, device:null},],

    ],

  },

  created: function () {

    myEmitter.on('cell', (coordinates) => {
      //console.log('coordinates',coordinates);

      if(coordinates.sound){

        let soundData =  this.sounds[ coordinates.sound ];

        var sound = new Howl({
          src: [soundData.sound]
        });

      sound.play();
      }

    })

    for(let y = 1; y<this.cells.length;y++){
      for(let x = 0; x<this.cells[y].length;x++){
        this.cells[y][x].active = false;
      }
    }

    let y = this.cells.length-2;
    const payload = ()=>{
      //console.log('TICK')
      y++;
      if(y>=this.cells.length) y = 0 ;

        for(let x = 0; x<this.cells[y].length;x++){
        //console.log("/",y,x)
        if(this.cells[y][x].active ){

          let nextActiveColX = x;
          let nextActiveColY = y+1;
          if(nextActiveColY>=this.cells.length) nextActiveColY = 0;

          this.cells[y][x].active = false;
          this.cells[nextActiveColY][nextActiveColX].active = true;
          myEmitter.emit('cell', Object.assign({x:nextActiveColX, y:nextActiveColY},this.cells[nextActiveColY][nextActiveColX]));
        }
      }
    }
    //setInterval(payload, (1000*60)/this.bpm);
    payload();

  },

  computed: {

    cellWidth:function(){return 100/this.cells[0].length},
    cellHeight:function(){return 100/this.cells.length},


  },

  methods: {

    setStation:function(cell){

      console.log(cell);
      cell.active = true;

    },

    nextSound:function(cell){

      let soundIndex = -2;

      if( cell.sound ) {
        // cell has a sounds
        soundIndex = Object.keys(this.sounds).indexOf(cell.sound);
      }

      soundIndex++;

      if(soundIndex < 0){
        soundIndex = 1;
      }


      if(soundIndex > Object.keys(this.sounds).length-1) {
        soundIndex = 0;
      }

      cell.sound =  Object.keys(this.sounds)[soundIndex];
      if ( cell.sound === 'silence') delete cell.sound
      console.log(soundIndex,cell.sound)
      //if (cell.sound) return this.sounds[cell.sound].icon;

    },

    cellIcon:function(cell){
      if (cell.sound) return this.sounds[cell.sound].icon;

    },
    cellClass:function(cell){
      if(cell.active&&cell.sound) return 'cell-active cell-sound';
      if(cell.active) return 'cell-active';
      if(cell.sound) return 'cell-sound';
      return 'bg';
    },



  }

})
