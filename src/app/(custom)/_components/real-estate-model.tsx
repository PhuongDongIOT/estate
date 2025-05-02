"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Suspense } from "react";

function HouseModel() {
  const { scene } = useGLTF("/house_model.glb"); // Thay bằng mô hình của bạn
  return <primitive object={scene} scale={1.5} />;
}

export default function RealEstateModel() {
  return (
    <Card className="w-full mx-auto p-4 bg-white shadow-xl rounded-lg">
      <CardContent className="flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">3D Real Estate Model</h2>
        <p className="text-gray-600 text-center">
          Explore the 3D model of your future home. Rotate, zoom, and interact!
        </p>

        <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
          <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
              <HouseModel />
            </Suspense>
            <OrbitControls enableZoom={true} />
          </Canvas>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-full flex justify-center"
        >
          <Button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 shadow-lg">
            View More Properties
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
}
