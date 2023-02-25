//type
import { GutterProps } from "../Gutter"

const GutterTitle: React.FC<GutterProps> = (props) => {
  const title = props.title
  const pizza = title?.match(/pizza/gi)

  const titleWithPizza = pizza ? (
    <>
      {title?.split("pizza")[0]}
      <span style={{ color: "#e64d4d" }}>pizza</span>
      {title?.split("pizza")[1]}
    </>
  ) : (
    <>{title}</>
  )

  return (
    <>
      <h2>{titleWithPizza}</h2>
      <h3>{props.sub ? props.sub : ""}</h3>
    </>
  )
}

export default GutterTitle
