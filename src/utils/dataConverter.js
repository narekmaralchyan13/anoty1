export function dataConverter(data) {
    return {
        day:`${data.day} ${data.time}`,
        require:`${data.category} , ${data.price} price , ${data.guests} guests`,
        additional:data.additional,
        email:data.email,
        phone:data.phone,
        message:data.message
    }
}