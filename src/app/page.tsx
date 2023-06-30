import Image from 'next/image'
import styles from './page.module.css'
import './index.css';
import Sidebar from './Sidebar';
import InformacionGeneral from '../components/InformacionGeneral';


export default function Home() {
  return (
    <>
        <Sidebar>
            <div>
                <InformacionGeneral />
            </div>
        </Sidebar>
    </>
)
}
