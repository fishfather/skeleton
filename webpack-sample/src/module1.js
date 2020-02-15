import { test1, test2 } from './a'

let label = 'jiangwei.'

var show = () => {
    test1();
    console.log('This is', label)
}

export {
    label,
    show
};