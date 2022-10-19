export default function Sum({numbers: [...num]}) {
    const res = num.reduce((sum, current) => sum + current);
    return (<h1>sum is: {res}</h1>)
    
}

Sum.defaultProps = {
    numbers: [4, 5]
}