"use client";

import RoboticArmDemo from "./RoboticArmDemo";
import HumidifierDemo from "./HumidifierDemo";
import CodeLearnDemo from "./CodeLearnDemo";
import PhysicsSimDemo from "./PhysicsSimDemo";

export default function ProjectDemo({ slug }: { slug: string }) {
  switch (slug) {
    case "vision-guided-robotic-arm":
      return <RoboticArmDemo />;
    case "iot-smart-humidifier":
      return <HumidifierDemo />;
    case "codelearn":
      return <CodeLearnDemo />;
    case "physics-lab-simulator":
      return <PhysicsSimDemo />;
    default:
      return null;
  }
}
