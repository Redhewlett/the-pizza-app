import GutterTitle from "./components/GutterTitle"
import { GutterBar } from "./Gutter.styles"
import { motion } from "framer-motion"

interface Props {
  title: string
  sub?: string
}

const Gutter: React.FC<Props> = (props) => {
  return (
    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -100 }} transition={{ duration: 1 }}>
      <GutterBar>
        <GutterTitle title={props.title} sub={props.sub} />
      </GutterBar>
    </motion.div>
  )
}

export default Gutter
