import { NextResponse } from "next/server";
import { APP_URL, JWT_SECRET, Apis } from "./config";


const middleware = async (req) => {

    const jwt = req.cookies.get('auth');
    const url = req.url;

    if (url.includes("/user") || url.includes("/vendor")) {

        if (!jwt || jwt === undefined) {
            return NextResponse.redirect(`${APP_URL}`);
        }
        try {
            const res = await fetch(`${Apis.VerifyJwtToken}`, {
                method: "POST",
                body: JSON.stringify({
                    token: jwt
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            const data = await res.json();
         
            if (!data) {
                return NextResponse.redirect(`${APP_URL}`);
            }
            const isVerified = data.status;
            if (isVerified) {
                console.log(data);
                return NextResponse.next();
            } else {
               //return NextResponse.redirect(`${APP_URL}`);
               return window.location.href=`${APP_URL}`;
            }
        } catch (e) {
            return NextResponse.redirect(`${APP_URL}`);
        }
    }
    return NextResponse.next();

}
export default middleware;
