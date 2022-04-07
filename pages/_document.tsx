import Document, { Html, Head, Main, NextScript } from "next/document";

// 이 커스텀 document 엘리먼트는 앱의 전체 뼈대를 내 맘대로 만들어주는 기능이다.
// 서버에서 처음에 딱 한번만 실행된다.
// 그래서 onclick 같은 이번트 핸들러는 동작하지 않는다.
// Main 컴포넌트는 NextJs 앱이 실행되는 컴포넌트이다 (= _app.tsx -> MyApp 컴포넌트)
class CustomDocument extends Document {
    render() {
        return <Html>
            <Head/>
            <body>
                <div id='modal-root'></div>
                <Main/> 
                <NextScript/>
            </body>
        </Html>
    }
}

export default CustomDocument;