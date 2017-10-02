import { Injectable } from '@angular/core';

@Injectable()
export class ParticlesService {
  myStyle: object = {};
  myParams: object = {};
  constructor() { }

  initParticles() {
    if (this.myParams['particles']) {
      return;
    } else {
      this.myStyle = {
        'position': 'fixed',
        'width': '100%',
        'height': '100%',
        'z-index': 0,
        'top': 0,
        'left': 0,
        'right': 0,
        'bottom': 0,
      };
      this.myParams = {
        particles: {
          number: {
            'value': 50,
            'density': {
              'enable': true,
              'value_area': 1000
            }
          },
          color: {
            'value': '#743ade'
          },
          shape: {
            'type': 'circle',
            'stroke': {
              'width': 2,
              'color': '#ffb3ff'
            },
            'polygon': {
              'nb_sides': 4
            },
            'image': {
              'src': './eth.svg',
              'width': 100,
              'height': 100
            }
          },
          opacity: {
            'value': 0.5,
            'random': false,
            'anim': {
              'enable': false,
              'speed': 1,
              'opacity_min': 0.2,
              'sync': false
            }
          },
          size: {
            'value': 2,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 40,
              'size_min': 0.1,
              'sync': false
            }
          },
          line_linked: {
            'enable': true,
            'distance': 150,
            'color': '#932ab3',
            'opacity': 0.9,
            'width': 1
          },
          move: {
            'enable': true,
            'speed': 2,
            'direction': 'bottom-right',
            'random': true,
            'straight': true,
            'out_mode': 'out',
            'bounce': true,
            'attract': {
              'enable': false,
              'rotateX': 600,
              'rotateY': 1200
            }
          }
        },
        interactivity: {
          'detect_on': 'canvas',
          'events': {
            'onhover': {
              'enable': true,
              'mode': 'repulse'
            },
            onclick: {
              'enable': true,
              'mode': 'repulse'
            },
            'resize': true
          },
          modes: {
            'grab': {
              'distance': 150,
              'line_linked': {
                'opacity': 1
              }
            },
            bubble: {
              'distance': 400,
              'size': 40,
              'duration': 2,
              'opacity': 1,
              'speed': 3
            },
            repulse: {
              'distance': 200
            },
            push: {
              'particles_nb': 4
            },
            remove: {
              'particles_nb': 2
            }
          }
        },
        retina_detect: true,
      };
    }
  }
}
