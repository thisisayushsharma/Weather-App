const Current = (current) => (
    `<h4>
    <h2>
        Temperature: ${current.temp_f} f
    </h2>
    </h4>
    <div><img src = '${current.condition.icon}' alt = '${current.condition.text}'></div>`
)   
export default Current;