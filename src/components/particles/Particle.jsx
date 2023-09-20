import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useMemo } from "react";
import "./particle.css";

export default function Particle() {
    const options = useMemo(() => {
        return {
            "fullScreen": {
                "enable": true,
                "zIndex": -1
            },
            "particles": {
                "number": {
                    "value": 100,
                },
                "color": {
                    "value": "#fff"
                },
                "shape": {
                    "type": "circle",
                },
                "opacity": {
                    "value": {"min" : 0.3, "max": 0.7},
                },
                "size": {
                    "value": {"min" : 1, "max": 3}
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150
                },
                "move": {
                    "enable": true,
                    "speed": {"min" : 1, "max": 5 },
                }
            },
            "interactivity": {
                "events": {
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 200,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 50,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true,
            "background": {
                "color": "#0c0722",
            }
        }
    }, []);
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      return (
    
        <Particles
          id="tsparticles"
          init={particlesInit}
            options={options}
        />
      );
}