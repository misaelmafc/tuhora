const parseLocation = function() {
    return location.hash.slice(1).toLowerCase() || "/"
 }
 
 const findComponent = function(path, routes) {
    return routes.find(route => route.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined
 }
 
 function router() {
    const path = parseLocation()
    const {component = ComponenteError} = findComponent(path, routes) || {}
    $("#app").html(component.render())
 }
 
 document.addEventListener("DOMContentLoaded", router)
 window.addEventListener("hashchange", router)