import Link from 'next/link'
import Card1 from '../../../assets/cardImages/TMSiq.webp'
import { ArrowRight } from 'lucide-react'

export default function ProductCard() {
  return (
    <div>
        <p className="">Our offerings</p>
        <h2 className="">Optimizing Performance With Our Cutting-Edge Solutions</h2>
        <div className="">
            <div className="">
                <img src={Card1.src} alt=""/>
                <div className="infoDesc">
                    <h5 className="">Transformer Monitoring System</h5>
                    <p className="">Empowering predictive maintenance of your transformer with online monitoring.</p>
                    <Link href={'/'}>Readmore<ArrowRight/> </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
