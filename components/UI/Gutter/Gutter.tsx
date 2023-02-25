import GutterTitle from "./components/GutterTitle"
import { GutterBar } from "./Gutter.styles"
import { motion } from "framer-motion"

export interface GutterProps {
  title: string | undefined
  sub?: string | undefined
}

const Gutter: React.FC<GutterProps> = (props) => {
  console.log(props)
  if (!props.title) return null
  return (
    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 1 }}>
      <GutterBar>
        <GutterTitle title={props.title} sub={props.sub} />
      </GutterBar>
    </motion.div>
  )
}

export default Gutter
