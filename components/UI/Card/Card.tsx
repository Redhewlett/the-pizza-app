import { WhiteCard } from "./Card.styles"
import { motion } from "framer-motion"
import Image from "next/image"
interface Props {
  img: string
  imgAlt: string
  step: string
  stepCount: number
}

const Card: React.FC<Props> = (props) => {
  return (
    <WhiteCard
      as={motion.div}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ type: "spring", damping: 10, stiffness: 100, duration: 0.5, delay: props.stepCount / 2 + 0.2 }}
    >
      <Image src={props.img} alt={props.imgAlt} />
      <p className='step home-step'>{props.step}</p>
      <p className='stepCount'>{props.stepCount}</p>
    </WhiteCard>
  )
}

export default Card

type PropsVariant = {
  children: JSX.Element[] | JSX.Element
  step: number
  stepImg?: string
}
export const CardVariant: React.FC<PropsVariant> = ({ children, step }) => {
  return (
    <WhiteCard
      as={motion.div}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ type: "spring", damping: 10, stiffness: 100, duration: 0.3, delay: step / 2 + 0.1 }}
    >
      {children}
    </WhiteCard>
  )
}
