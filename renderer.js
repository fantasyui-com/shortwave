
const Wad = require('web-audio-daw');
const Tuna = require('tunajs');

Wad.tuna = new Tuna(Wad.audioContext);

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();



const wadPresets = [];

wadPresets.push( new Wad({
  source: 'sine',
  vibrato : {  shape     : 'sine' },
  env: {
    attack: .001,
    decay: .008,
    sustain: .2,
    hold: .03,
    release: .01
  },
  filter: {
    type: 'highpass',
    frequency: 400,
    q: 1
  }
}, ))





wadPresets.push( new Wad({
  source: 'sine',
    vibrato : {  shape     : 'sine' },
  env: {
    attack: .001,
    decay: .01,
    sustain: .2,
    hold: .03,
    release: .02
  },
  filter: {
    type: 'bandpass',
    frequency: 300,
    q: .180
  }
}, ));



wadPresets.push( new Wad({
  source: 'sine',
    vibrato : {  shape     : 'sine' },
  env: {
    attack: .001,
    decay: .008,
    sustain: .2,
    hold: .43,
    release: .01
  },
  filter: {
    type: 'highpass',
    frequency: 100,
    q: .2
  }
}, ));




wadPresets.push( new Wad({
  source: 'sine',
    vibrato : {  shape     : 'sine' },
  volume: .3,
  env: {
    attack: .01,
    decay: .002,
    sustain: .5,
    hold: 2.5,
    release: .3
  },
  filter: {
    type: 'lowpass',
    frequency: 600,
    q: 7,
    env: {
      attack: .7,
      frequency: 1600
    }
  },
  vibrato: {
    attack: 8,
    speed: 8,
    magnitude: 100
  }
}, ));


wadPresets.push( new Wad({
  source: 'sine',
  vibrato : {  shape     : 'sine' },
  env: {
    attack: .001,
    decay: .008,
    sustain: .2,
    hold: .03,
    release: .01
  },
  filter: {
    type: 'highpass',
    frequency: 100,
    q: 1
  }
}, ))






function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


new Vue({
  el: '#primary',

  data: {

    bpm: 320,

    states: [
      {            rgba:[0,     0,  0,  0] },

      { preset:0, rgba:[193,  63,  33, 1] },
      { preset:1, rgba:[210, 110,  45, 1] },
      { preset:2, rgba:[221, 160,  50, 1] },
      { preset:3,  rgba:[120, 175, 159, 1] },
      { preset:4,  rgba:[101, 156, 200, 1] },

    ],

    cells: [
      [{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},],
      [{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},],
      [{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},],
      [{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},],
      [{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},],
      [{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},],
      [{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},],
      [{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},],
      [{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},],
      [{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},],
      [{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},],
      [{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},],
      [{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},],
      [{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},],
      [{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},],
      [{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},{active:false, state:0},],


    ],

  },

  created: function () {

    myEmitter.on('cell', (cell) => {
      const state = this.states[cell.state];
      console.log( cell );

      if(cell.pitch){
        wadPresets[state.preset].play({pitch : cell.pitch})
      }


    })

    for(let x = 0; x<this.cells[0].length;x++){
      this.cells[0][x].active = true;
    }
    for(let y = 1; y<this.cells.length;y++){
      for(let x = 0; x<this.cells[y].length;x++){
        this.cells[y][x].active = false;
      }
    }


    for(let y = 0; y<this.cells.length;y++){
      const yp = parseFloat(((y * 100 / (this.cells.length-1))/100).toFixed(2));
      for(let x = 0; x<this.cells[y].length;x++){
        const xp = parseFloat(((x * 100 / (this.cells[y].length-1))/100).toFixed(2));
        this.cells[y][x].yp = yp;
        this.cells[y][x].xp = xp;

        this.cells[y][x].pitch = (2000*xp)+100;

      }
    }

    /// Make a song
    for(let y = 1; y<this.cells.length;y++){
      for(let x = 2; x<this.cells[y].length;x++){
        if (!getRandomInt(0,24)) this.cells[y][x].state = getRandomInt(0,this.states.length)
      }
    }

    /// Make a beat
    const bum1 = getRandomInt(1,this.states.length);
    const bum2 = getRandomInt(1,this.states.length);
    const skip = getRandomInt(2,4);

    for(let y = 1; y<this.cells.length;y=y+skip){

      this.cells[y][0].state = bum1;
      this.cells[y-1][1].state = bum2;

    }


    let y = this.cells.length-2;
    const payload = ()=>{
      y++;
      if(y>=this.cells.length) y = 0 ;
        for(let x = 0; x<this.cells[y].length;x++){
        if(this.cells[y][x].active ){
          let nextActiveColX = x;
          let nextActiveColY = y+1;
          if(nextActiveColY>=this.cells.length) nextActiveColY = 0;
          this.cells[y][x].active = false;
          this.cells[nextActiveColY][nextActiveColX].active = true;

          if(this.cells[nextActiveColY][nextActiveColX].state) myEmitter.emit('cell', Object.assign({x:nextActiveColX, y:nextActiveColY},this.cells[nextActiveColY][nextActiveColX]));

        }
      }
    }
    setInterval(payload, (1000*60)/this.bpm);
    payload();
  },

  computed: {

    cellWidth:function(){return 100/this.cells[0].length},
    cellHeight:function(){return 95/this.cells.length},


  },

  methods: {

    setStation:function(cell){

      cell.state++;
      const selected = this.states[cell.state];
      console.log(`rgb(${selected.rgba.slice(0,3).map(i=> i * .8|1 ).join()})` )

      if(cell.state>(this.states.length-2)) cell.state = 0;

      if (cell.state === 0) {
        cell.active = false;
      } else {
        cell.active = true;
      }

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
      if(cell.active) return 'cell-active';
      if(cell.sound) return 'cell-sound';
      //return 'bg';
    },

    cellStyle:function(cell){

      if(!cell.state) return;

      const selected = this.states[cell.state];

      if(!selected) return;
      return {
        backgroundColor: `rgba(${selected.rgba.join()})`,
        borderColor: `rgb(${selected.rgba.slice(0,3).map(i=> i * .8|1 ).join()})`,
      }

    },



  }

})


// rgb(193, 63, 33)
// rgb(210, 110, 45)
// rgb(221, 160, 50)
// rgb(120, 175, 159)
// rgb(101, 156, 200)
