import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'




const Box = styled.div`
position: absolute;
top:0;
right:0;
left:0;
bottom:0;
z-index:0;
`

const ParticleSkillsComponent = (props) => {
    return (
        <Box>
            <Particles
            style={{position:'absolute',top:0}}
            params={{
                "particles": {
                    "number": {
                        "value": 14,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "speed": 1,
                        "out_mode": "out"
                    },
                    "shape": {
                        "type": [
                            "image",
                            "circle"
                        ],
                        "image": [
                            {
                                "src": "./public/Images/skills/ansible.png",
                                "height": 20,
                                "width": 23
                            },
                            {
                                "src": "./public/Images/skills/css.png",
                                "height": 20,
                                "width": 20
                            },
                            {
                                "src": "./public/Images/skills/docker.png",
                                "height": 20,
                                "width": 20
                            }
                        ]
                    },
                    "color": {
                        "value": "#CCC"
                    },
                    "size": {
                        "value": 30,
                        "random": false,
                        "anim": {
                            "enable": true,
                            "speed": 4,
                            "size_min": 10,
                            "sync": false
                        }
                    }
                },
                "retina_detect": false
	}} />
        </Box>
    )
}

export default ParticleSkillsComponent
