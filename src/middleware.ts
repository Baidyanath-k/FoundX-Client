import { NextRequest, NextResponse } from "next/server";

const AuthRoutes = ["/login", "/registration"];

type TRole = keyof typeof roleBasedRoutes;

const roleBasedRoutes = {
    USER: [/^\/profile/],
    ADMIN: [/^\/admin/],
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // console.log(pathname);

    // const user = {
    //     name: "Mir",
    //     token: "adsf asda",
    //     role: "USER",
    // };

    const user = undefined;

    if (!user) {
        // have no user then go Login page otherwise not
        if (AuthRoutes.includes(pathname)) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    if (user?.role && roleBasedRoutes[user?.role as TRole]) {
        const routes = roleBasedRoutes[user?.role as TRole];

        if (routes.some((route) => pathname.match(route))) {
            return NextResponse.next();
        }
    }

    return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/profile", "/admin", "/login", "/registration"],
};