 function customRender(reactElement, mainConatiner){

//    const domElement = document.createElement(reactElement.type)

//    domElement.innerHTML  = reactElement.children
//    domElement.setAttribute('href',reactElement.props.href)
//    domElement.setAttribute('target',reactElement.props.target)

//    mainConatiner.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML  = reactElement.children

    for (const prop in reactElement.props) {
        if(prop === "children") continue ;
        /*
        You're trying to access the property dynamically, but you're doing it like it's a static property named prop, which doesn’t exist. So reactElement.props.prop will be undefined.

        ✅ Correct version:
        You should use bracket notation to dynamically access the value of the property:

        domElement.setAttribute(prop, reactElement.props[prop])
        */
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    mainConatiner.appendChild(domElement)
 }

const reactElement = {
    type: "a",
    props: {
        href:"https://google.com",
        target: '_blank'
    },
    children : "click me to visit google"
}

const mainConatiner = document.querySelector("#root")


customRender(reactElement, mainConatiner)