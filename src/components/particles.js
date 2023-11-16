import React from 'react';
import { useCallback } from "react";
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";

const ParticleComponent = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles" 
            init={particlesInit} 
            loaded={particlesLoaded} 
            options={{ 
                particles: {
                    number: {
                        value: 7,
                        density: {
                            enable: false,
                            value_area: 800,
                        },
                    },
                    shape: {
                        type: 'images',
                        images : [
                            {
                                // react
                                src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
                                width: 150,
                                height: 130,
                            },
                            {
                                // vscode
                                src: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg',
                                width: 150,
                                height: 150,
                            },
                            {
                                // ror
                                src: 'https://cdn.worldvectorlogo.com/logos/rails.svg',
                                width: 120,
                                height: 150,
                            },
                            {
                                // ruby
                                src: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg',
                                width: 150,
                                height: 150,
                            },
                            {
                                // python
                                src: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
                                width: 150,
                                height: 150,
                            },
                            {
                                // wp
                                src: 'https://s.w.org/style/images/about/WordPress-logotype-wmark-white.png',
                                width: 150,
                                height: 150,
                            },
                            {
                                // js
                                src: 'https://assets-global.website-files.com/62038ffc9cd2db4558e3c7b7/6242e5dd4337267623f1e7a5_js.svg',
                                width: 150,
                                height: 150,
                            },
                        ],
                    },
                    move: {
                        enable: true,
                        speed: 3,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        attract: {
                            enable: true,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                    line_linked: {
                        enable: false,
                    },
                    interactivity: {
                        events: {
                        onhover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        },
                        modes: {
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    }, 
                    size: {
                        value: 15,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 3,
                            size_min: 11,
                            sync: false
                        }
                    }
                },
                detectRetina: true,
            }}
        />
  );
};

export default ParticleComponent;