const base = {
    get() {
        return {
            url : "http://localhost:8080/xylfwglxt/",
            name: "xylfwglxt",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xylfwglxt/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "乡村养老服务管理系统"
        } 
    }
}
export default base
