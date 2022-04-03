type DeepReadonly<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
};

const user = {
    firstnname: 'Hatul',
    lastname: 'Hatuli'
}
type ReadonlyUser =  DeepReadonly<typeof user>;
function checkValidityAndFireRockets(u: ReadonlyUser) {
    if (u.firstnname && u.lastname) {
        u.firstnname = u.firstnname.toLowerCase(); // Cannot assign to 'firstnname' because it is a read-only property.
        return user;
    }
    return null;
}
const validatedUser = checkValidityAndFireRockets(user);
console.log(user === validatedUser);
console.log(user.firstnname === 'Hatuli');