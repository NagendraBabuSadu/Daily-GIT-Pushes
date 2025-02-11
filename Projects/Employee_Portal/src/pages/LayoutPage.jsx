import LeftNavigationComponent from "../components/atoms/LeftNavigationComponent"
import { Outlet } from "react-router-dom"
import { useState } from "react";

export  default function LayoutPage() {



    return (
        <div className="layout-container">
            <LeftNavigationComponent  />
            <main className="main-content">
                <Outlet  />
            </main>
        </div>
    )
}