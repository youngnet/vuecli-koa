const sessionid = 'beisilante-sessionid';

export default function stoken(ctx) {
    Object.defineProperty(ctx, 'ticket', {
        get: () => {
            return ctx.cookies.get(sessionid, {
                signed: true,
                httpOnly: true
            });
        },
        set: (value) => {
            ctx.cookies.set(sessionid, value, {
                signed: true,
                httpOnly: true
            });
        }
    });


    ctx.sess = (session) => {
       if(session){
            ctx.token = session;
        }
        return utils.verifyJwt(ctx.token);
    };
    ctx.clearSess = () =>{
        ctx.token = null;
    },
    ctx.clearCookie =() => {
        ctx.token = null;
        ctx.resetPwdSign = null;
        ctx.emailCode = null;
    }
}
