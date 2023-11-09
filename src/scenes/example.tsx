import {makeScene2D, Node, Path, Circle, Grid, Line, Txt, Rect, Layout} from '@motion-canvas/2d';
import {linear} from '@motion-canvas/core/lib/tweening';
import {waitUntil} from '@motion-canvas/core/lib/flow';
import {slideTransition} from '@motion-canvas/core/lib/transitions';
import {makeRef, useScene} from '@motion-canvas/core/lib/utils';
import {all, createRef, waitFor,loop} from '@motion-canvas/core';
import * as CORE from '@motion-canvas/core'; 
import {map} from '@motion-canvas/core/lib/tweening';
import {Vector2, Spacing} from '@motion-canvas/core/lib/types';
import {path_data} from '../usmap.js';
//import '@motion-canvas/player';


const RED = '#ff6470';
const GREEN = '#99C47A';
const BLUE = '#68ABDF';
   
export default makeScene2D(function* (view) {
    const mapRow = createRef<Layout>();
    const circleAlabama = createRef<Circle>();
    const circleFlorida = createRef<Circle>();
    const circleHawaii = createRef<Circle>();
    const circleMaine = createRef<Circle>();
    const circleTexas = createRef<Circle>();
    const circleNevada = createRef<Circle>();
    const circleOregon = createRef<Circle>();
    const circleWashington = createRef<Circle>();
    const usmap = createRef<Path>();
    const txt = createRef<Txt>();

    view.add(
        <>
            <Layout
                width={1920}
                height={1080}
                direction={'row'}
                gap={0}
                layout
                padding={0}>
                <Layout grow={1} gap={0} direction={'column'}>
                    <Path
                        ref={usmap}
                        lineWidth={4}
                        stroke={'#000000'}
                        data={path_data}
                        position={new Vector2(0,0)}
                        scale={1.1}
                        fill={'lightseagreen'}
                        start={0}
                        end={0}
                    ></Path>
                    <Rect
                        ref={mapRow}
                        grow={0}
                        fill={BLUE}
                        radius={4}
                        stroke={'#fff'}
                        lineWidth={0}
                        margin={2}
                    >
                        <Circle 
                            ref={circleAlabama}
                            layout={false} width={63} height={63} 
                            position={new Vector2(150,-100)}
                        /> 
                        <Circle 
                            ref={circleFlorida}
                            layout={false} width={63} height={63} 
                            position={new Vector2(300,0)}
                        /> 
                        <Circle 
                            ref={circleHawaii}
                            layout={false} width={92} height={92} 
                            position={new Vector2(-500,200)}
                        /> 
                        <Circle 
                            ref={circleMaine}
                            layout={false} width={200} height={200} 
                            position={new Vector2(390,-520)}
                        /> 
                        <Circle 
                            ref={circleTexas}
                            layout={false} width={34} height={34} 
                            position={new Vector2(-90,-100)}
                        /> 
                        <Circle 
                            ref={circleNevada}
                            layout={false} width={53} height={53} 
                            position={new Vector2(-400,-340)}
                        /> 
                        <Circle 
                            ref={circleOregon}
                            layout={false} width={48} height={48} 
                            position={new Vector2(-480,-460)}
                        /> 
                        <Circle 
                            ref={circleWashington}
                            layout={false} width={72} height={72} 
                            position={new Vector2(-440,-520)}
                        /> 
                    </Rect>
                </Layout>
                <Layout grow={0} gap={0} margin={[100,10]} size={[800,400]}>
                    <Rect textWrap layout direction={'column'} gap={0}>
                        <Txt ref={txt} fontSize={40} fill={'#fff'} zIndex={100} margin={[30,0]}>
                        Foreign individuals and entities reported holding an interest in 
                        approximately 40 million acres of U.S. agricultural land as of 
                        December 31, 2021 (Revised 2023).
                        </Txt>
                        <Txt ref={txt} fontSize={60} fill={'#fff'} zIndex={100} margin={[20,0]}>
                            Proportion of Foreign-Held land by State:
                        </Txt>
                        <Txt ref={txt} fontSize={30} fill={'#fff'} zIndex={100} margin={[10,30]}> 
                            - Alabama (6.3%)
                        </Txt>
                        <Txt ref={txt} fontSize={30} fill={'#fff'} zIndex={100} margin={[10,30]}> 
                            - Florida (6.3%)
                        </Txt>
                        <Txt ref={txt} fontSize={30} fill={'#fff'} zIndex={100} margin={[10,30]}> 
                            - Hawaii (9.2%)
                        </Txt>
                        <Txt ref={txt} fontSize={30} fill={'#fff'} zIndex={100} margin={[10,30]}> 
                            - Maine (20.1%)
                        </Txt>
                        <Txt ref={txt} fontSize={30} fill={'#fff'} zIndex={100} margin={[10,30]}> 
                            - Texas (3.4%)
                        </Txt>
                        <Txt ref={txt} fontSize={30} fill={'#fff'} zIndex={100} margin={[10,30]}> 
                            - Nevada (5.3%)
                        </Txt>
                        <Txt ref={txt} fontSize={30} fill={'#fff'} zIndex={100} margin={[10,30]}> 
                            - Oregon (4.8%)
                        </Txt>
                        <Txt ref={txt} fontSize={30} fill={'#fff'} zIndex={100} margin={[10,30]}> 
                            - Washington (7.2%)
                        </Txt>
                    </Rect>
                </Layout>
            </Layout>
        </>,
    );
    yield* all(
        usmap().end(1,1),
    );
    yield* all(
        circleAlabama().fill('#fff'),
        circleFlorida().fill('#008000'),
        circleHawaii().fill('#40e0d0'),
        circleMaine().fill('#01796f'),
        circleTexas().fill('#cc5500'),
        circleNevada().fill('#c0c0c0'),
        circleOregon().fill('#ffa500'),
        circleWashington().fill('#67009e'),
    );
});
