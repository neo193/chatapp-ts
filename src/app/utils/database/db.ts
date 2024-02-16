type UserData = {
    username: string,
    password: string
}

export const validateUser = (userData : UserData): boolean => {
    console.log("Password is: ", userData.password)
    if (userData.password.length > 8){
        console.log('Validated');
        return true
    } else { 
        console.log("Returning False")
        return false
    }
}