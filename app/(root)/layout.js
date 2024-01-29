import { ClerkProvider } from "@clerk/nextjs";
import LeftSideBar from "../../components/layout/LeftSideBar"
import RigthSideBar from "../../components/layout/RigthSideBar"
import TopBar from "../../components/layout/TopBar"
import BottomBar from "../../components/layout/BottomBar"
import MainContainer from "../../components/layout/MainContainer"
import "../globals.css";
import { Inter } from "next/font/google";
export const metadata={
    title:'ZuZu',
    description:"Social Media App",
}

const inter=Inter({subsets:["latin"]});

export default function RootLayout({childeren}){
    return (
        <ClerkProvider>

    <html lang="en">
        <body className={`${inter.className} bg-purple-2 text-light-1`}>
            <main className="flex flex-row">
                <LeftSideBar/>
        <MainContainer>
            <TopBar/>
            {childeren}
            </MainContainer>
        <RigthSideBar/>
            </main>
            <BottomBar/>
        </body>
    </html>
        </ClerkProvider>
    );
}