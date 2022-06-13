import Link from "next/link"
import { useRouter } from "next/router"


export default function NavBar() {
    const router = useRouter();
    // nextJS에만 있는걸로 이미 설치되어있다
    //location에 대한 정보를 얻는다
    // console.log(router); 

    return (
    <nav>
        {/* 앵커 사용 안하고 Link로 연결  */}
        {/* 리액트 돔과는 다르게 <a>를 뺄 수 없다.
        Link는 연결만 해주고 스타일이나 className전달불가능
        불필요한 모든 것을 앵커 내에 넣어주는거임 */}
        <Link href='/'>
        <a style={{color: router.pathname === "/" ? "red" : "blue"}}>Home</a>
        </Link>
        <Link href='/about'>
        <a style={{color: router.pathname === "/about" ? "red" : "blue"}} >About</a>
        </Link>
    </nav>
    )
}