export interface DataState {
    initials: string,
    name: string,
    email: string,
    phoneNumber: string,
    address: string,
    job: string
}

export const initialDataState: DataState = {
    initials: 'O E G R',
    name: 'Omar Eliseo Gómez Ramírez',
    email: 'gomar8138@gmail.com',
    phoneNumber: '+52 452 525 52 86',
    address: 'Emiliano Zapata 27, San Felipe De los Herreros, Charapan, Michoacan, Mexico, CP. 60241',
    job: 'Ingeniero Mecatrónico'
}