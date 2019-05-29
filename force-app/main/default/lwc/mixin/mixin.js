
var mixin = ( base ) => class extends base{
    generateHomePageReference(objectApi){
        return {
            type: "standard__objectPage",
            attributes: {
                "objectApiName": objectApi,
                "actionName": "new"
            }
        };
    }
}
export default mixin;