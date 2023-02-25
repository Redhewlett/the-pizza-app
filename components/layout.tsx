//
import { useRouter } from "next/router"
// components
import Nav from "./UI/Nav/Nav"
import Gutter from "./UI/Gutter/Gutter"

type LayoutProps = React.PropsWithChildren<{}>

const pages: { title: string; path: string; sub: string }[] = [
  {
    title: "Welcome to your pizza companion app",
    path: "/",
    sub: "The app that lets u create you pizza from scratch and gives you feedback"
  },
  {
    title: "Create your own pizza",
    path: "/create",
    sub: "Get nutritional informations and feedback on your pizza"
  },
  { title: "About", path: "/about", sub: "About the app and the developer" },
  { title: "Learn more about pizza", path: "/aboutPizza", sub: "Learn more about pizza and its history" }
]

export default function Layout({ children, ...otherProps }: LayoutProps) {
  const router = useRouter()
  const path = router.pathname
  const page = pages.find((page) => page.path === path)
  const title = page?.title
  const sub = page?.sub

  return (
    <>
      <Nav />
      <Gutter title={title} sub={sub} />
      <main>{children}</main>
    </>
  )
}
