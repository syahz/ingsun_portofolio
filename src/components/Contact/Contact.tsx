import './Contact.css'
import Model from '../Model'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

function Contact() {
  return (
    <div className='contact'>
      <div className='contact-wrapper'>
        <Canvas>
          <directionalLight intensity={3} position={[0, 3, 2]} />
          <Environment preset='city' />
          <Model />
        </Canvas>
      </div>
    </div>
  )
}

export default Contact
