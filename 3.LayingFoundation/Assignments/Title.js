const Head2 = ()=>{
    return (<div>
        <h1>this is head2</h1>
    </div>)
}
const Title = ()=>{
    return (
        <div className="title">
            <h1>This is h1 tag</h1>
            <h2>This is h2 tag</h2>
            <h3>This is h3 tag</h3>
            <Head2/>
        </div>
    )
}

export default Title;