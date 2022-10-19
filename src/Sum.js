export default function Sum({numbers: [...num]}) {
    const res = num.reduce((sum, current) => sum + current);
    console.log([...num]);
    return (<h1>sum is: {res}</h1>)
    
}