"use client";

import { ReactPhotoSphereViewer, ViewerAPI } from "react-photo-sphere-viewer";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';

// Import plugins stylesheets
import "@photo-sphere-viewer/markers-plugin/index.css";
import "@photo-sphere-viewer/virtual-tour-plugin/index.css";
import "@photo-sphere-viewer/gallery-plugin/index.css";
import { createRef, useState } from "react";

function PanoramaViewer() {
  const pSRef = createRef<ViewerAPI>();
  const [getCurrentNodeFunction, setGetCurrentNodeFunction] = useState<any>(null);

  const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';

  const caption = 'Cape Florida Light, Key Biscayne <b>&copy; Pixexid</b>';
  const markerLighthouse = {
    id: 'marker-1',
    image: baseUrl + 'pictos/pin-red.png',
    tooltip: 'Cape Florida Light, Key Biscayne',
    size: { width: 32, height: 32 },
    anchor: 'bottom center',
    gps: [-80.155973, 25.666601, 29 + 3],
  };

  const handleReady = (instance: any) => {
    const virtualTour = instance.getPlugin(VirtualTourPlugin);
    if (!virtualTour) return;

    virtualTour.setNodes([
      {
        id: '1',
        panorama: baseUrl + 'tour/key-biscayne-1.jpg',
        thumbnail: baseUrl + 'tour/key-biscayne-1-thumb.jpg',
        // name:  'One',
        caption: `[1] ${caption}`,
        links: [{ nodeId: '2' }],
        markers: [markerLighthouse],
        gps: [-80.156479, 25.666725, 3],
        sphereCorrection: { pan: '33deg' },
      },
      {
        id: '2',
        panorama: baseUrl + 'tour/key-biscayne-2.jpg',
        thumbnail: baseUrl + 'tour/key-biscayne-2-thumb.jpg',
        // name: 'Two',
        caption: `[2] ${caption}`,
        links: [{ nodeId: '3' }, { nodeId: '1' }],
        markers: [markerLighthouse],
        gps: [-80.156168, 25.666623, 3],
        sphereCorrection: { pan: '42deg' },
      },
      {
        id: '3',
        panorama: baseUrl + 'tour/key-biscayne-3.jpg',
        thumbnail: baseUrl + 'tour/key-biscayne-3-thumb.jpg',
        // name: 'Three',
        caption: `[3] ${caption}`,
        links: [{ nodeId: '4' }, { nodeId: '2' }, { nodeId: '5' }],
        gps: [-80.155932, 25.666498, 5],
        sphereCorrection: { pan: '50deg' },
      },
      {
        id: '4',
        panorama: baseUrl + 'tour/key-biscayne-4.jpg',
        thumbnail: baseUrl + 'tour/key-biscayne-4-thumb.jpg',
        // name: 'Four',
        caption: `[4] ${caption}`,
        links: [{ nodeId: '3' }, { nodeId: '5' }],
        gps: [-80.156089, 25.666357, 3],
        sphereCorrection: { pan: '-78deg' },
      },
      {
        id: '5',
        panorama: baseUrl + 'tour/key-biscayne-5.jpg',
        thumbnail: baseUrl + 'tour/key-biscayne-5-thumb.jpg',
        // name: 'Five',
        caption: `[5] ${caption}`,
        links: [{ nodeId: '6' }, { nodeId: '3' }, { nodeId: '4' }],
        gps: [-80.156292, 25.666446, 2],
        sphereCorrection: { pan: '170deg' },
      },
      {
        id: '6',
        panorama: baseUrl + 'tour/key-biscayne-6.jpg',
        thumbnail: baseUrl + 'tour/key-biscayne-6-thumb.jpg',
        // name: 'Six',
        caption: `[6] ${caption}`,
        links: [{ nodeId: '5' }, { nodeId: '7' }],
        gps: [-80.156465, 25.666496, 2],
        sphereCorrection: { pan: '65deg' },
      },
      {
        id: '7',
        panorama: baseUrl + 'tour/key-biscayne-7.jpg',
        thumbnail: baseUrl + 'tour/key-biscayne-7-thumb.jpg',
        name: 'Seven',
        caption: `[7] ${caption}`,
        links: [{ nodeId: '6' }],
        gps: [-80.15707, 25.6665, 3],
        sphereCorrection: { pan: '110deg', pitch: -3 },
      },
    ],
      "2"
    );

    const getCurrentNode = virtualTour.getCurrentNode.bind(virtualTour);
    setGetCurrentNodeFunction(() => getCurrentNode);
  };

  const handleClick = () => {
    console.log(getCurrentNodeFunction());
  };


  const plugins: any = [
    [MarkersPlugin,
      [GalleryPlugin, {
        thumbnailSize: { width: 100, height: 100 },
      }],
      [VirtualTourPlugin, {
        positionMode: 'gps',
        renderMode: '3d',
      }],
    ],

    // [CompassPlugin, {
    //   hotspots: [
    //     { yaw: '0deg' },
    //     { yaw: '90deg' },
    //     { yaw: '180deg' },
    //     { yaw: '270deg' },
    //   ],
    // }]
  ]


  return (
    <div className="relative" id={"container-360"}>
      <ReactPhotoSphereViewer
        ref={pSRef}
        loadingImg={baseUrl + "loader.gif"}
        mousewheelCtrlKey={true}
        defaultYaw={"130deg"}
        navbar={[
          "zoom",
          "move",
          "gallery",
          "download",
          "description",
          "caption",
          "fullscreen",
        ]}
        src={"/images/preview.jpg"}
        panorama={baseUrl + 'sphere.jpg'}
        plugins={[
          MarkersPlugin,
          [GalleryPlugin, {
            thumbnailSize: { width: 80, height: 80 },
          }],
          [VirtualTourPlugin, {
            positionMode: 'gps',
            renderMode: '3d',
          }],
        ]}
        height={"80vh"}
        width={"100%"}
        touchmoveTwoFingers={true}
        hideNavbarButton={true}
        onReady={handleReady}
        container={"container-360"}
      ></ReactPhotoSphereViewer>
    </div>
  );
}

export default PanoramaViewer;
