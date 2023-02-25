import { RedButton } from "./Button.styles"
import { motion } from "framer-motion"

interface Props {
  children: string
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
}

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 1, delay: 0.5 }}>
      <RedButton onClick={onClick}>{children}</RedButton>
    </motion.div>
  )
}

export default Button
