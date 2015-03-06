/*

Author : K.G.R Vamsi


*/


    YUI().use(
            'aui-diagram-builder',

            function (A) {

                A.AwsamiCustom = A.Component.create({
                    NAME: 'compute-networking-amazon-ec2-ami',

                    ATTRS: {
                        type: {
                            value: 'custom'
                        },
                        name: {
                            valueFn: function () {
                                var instance = this;

                                return availableFields[0]['label'] + this.get('id');
                            }
                        },
                        id: {
                            valueFn: function () {
                                var instance = this;

                                return (++A.Env._uidx);
                            },
                            writeOnce: true
                        }
                    },

                    EXTENDS: A.DiagramNodeTask,

                    prototype: {
                        getPropertyModel: function () {
                            var instance = this;

                            var model = A.DiagramNodeTask.superclass.getPropertyModel.apply(instance, arguments);

                            model.push({
                                attributeName: 'id',
                                name: 'ID'
                            });

                            return model;
                        }
                    }
                });      

                A.VpcGatewayCustom = A.Component.create({
                    NAME: 'compute-networking-amazon-vpc-internet-gateway',

                    ATTRS: {
                        type: {
                            value: 'gateway'
                        },
                        name: {
                            valueFn: function () {
                                var instance = this;

                                return availableFields[2]['label'] + this.get('id');
                            }
                        },
                        id: {
                            valueFn: function () {
                                var instance = this;

                                return (++A.Env._uidx);
                            },
                            writeOnce: true
                        }
                    },

                    EXTENDS: A.DiagramNodeTask,

                    prototype: {
                        getPropertyModel: function () {
                            var instance = this;

                            var model = A.DiagramNodeTask.superclass.getPropertyModel.apply(instance, arguments);

                            model.push({
                                attributeName: 'id',
                                name: 'ID'
                            });

                            return model;
                        }
                    }
                });      

                A.AwsinstanceCustom = A.Component.create({
                    NAME: 'compute-networking-amazon-ec2-instance',

                    ATTRS: {
                        type: {
                            value: 'instance'
                        },
                        name: {
                            valueFn: function () {
                                var instance = this;

                                return availableFields[1]['label'] + this.get('id');
                            }
                        },
                        id: {
                            valueFn: function () {
                                var instance = this;

                                return (++A.Env._uidx);
                            },
                            writeOnce: true
                        }
                    },

                    EXTENDS: A.DiagramNodeTask,

                    prototype: {
                        getPropertyModel: function () {
                            var instance = this;

                            var model = A.DiagramNodeTask.superclass.getPropertyModel.apply(instance, arguments);

                            model.push({
                                attributeName: 'id',
                                name: 'ID'
                            });

                            return model;
                        }
                    }
                }); 
                
                A.RouterCustom = A.Component.create({
                    NAME: 'compute-networking-amazon-vpc-router',

                    ATTRS: {
                        type: {
                            value: 'router'
                        },
                        name: {
                            valueFn: function () {
                                var instance = this;

                                return availableFields[3]['label'] + this.get('id');
                            }
                        },
                        id: {
                            valueFn: function () {
                                var instance = this;

                                return (++A.Env._uidx);
                            },
                            writeOnce: true
                        }
                    },

                    EXTENDS: A.DiagramNodeTask,

                    prototype: {
                        getPropertyModel: function () {
                            var instance = this;

                            var model = A.DiagramNodeTask.superclass.getPropertyModel.apply(instance, arguments);

                            model.push({
                                attributeName: 'id',
                                name: 'ID'
                            });

                            return model;
                        }
                    }
                });
                A.DiagramBuilder.types['custom'] = A.AwsamiCustom;
                A.DiagramBuilder.types['instance'] = A.AwsinstanceCustom;
                A.DiagramBuilder.types['gateway'] = A.VpcGatewayCustom;
                 A.DiagramBuilder.types['router'] = A.RouterCustom;

                var availableFields = [{
                    
                    iconClass: 'compute-networking-amazon-ec2-ami-icon',
                    label: 'Ec2-Ami',
                    type: 'custom'
                    
                },{
                    
                    iconClass: 'compute-networking-amazon-ec2-instance-icon',
                    label: 'Ec2-Instance',
                    type: 'instance'
                    
                },{
                    
                    iconClass: 'compute-networking-amazon-vpc-internet-gateway-icon',
                    label: 'Vpc-IGW',
                    type: 'gateway',
                    width: 75,
                    hiddenAttributes: ['showLabel','readOnly','required']
                    
                },{
                    
                    iconClass: 'compute-networking-amazon-vpc-router-icon',
                    label: 'VPC-Router',
                    type: 'router'
                    
                }];

       window.myDiagramContainer = new A.DiagramBuilder({
                    availableFields: availableFields,
                    boundingBox: '#myDiagramContainer',
                    width: 1280,
                    height: 320,
                    shapeBoundary:true,
                    fields: [],
                    srcNode: '#myDiagramBuilder'
                }).render();          
            
            console.log(availableFields);
            });
function saveFieldsForm(){  
    var formJSON = {};

    myDiagramContainer.get('fields').each(
    function(item, index, collection) {
        var dataType = item.get('dataType'),
            indexType = item.get('indexType'),
            label = item.get('label'),
            multiple = item.get('multiple'),
            name = item.get('name'),
            options = item.get('options'),
            readOnly = item.get('readOnly'),
            repeatable = item.get('repeatable'),
            required = item.get('required'),
            showLabel = item.get('showLabel'),
            type = item.get('type'),
            tip = item.get('tip'),
            predefinedValue= item.get('predefinedValue'),
            width = item.get('width');

            console.log(item,"In Items");
            console.log(index,"In Index");
            console.log(collection,"In Collection");
            console.log(connector, "In Connector");

        /*var fieldXML = '<field>';
        fieldXML += '<type>' + type + '</type>';
        fieldXML += '<name>' + name + '</name>';
        fieldXML += '<required>' + required + '</required>';
        fieldXML += '<tip>' + tip + '</required>';
        fieldXML += '<predefinedValue>' + predefinedValue + '</predefinedValue>';        
        fieldXML += '</field>';
        alert("fieldXML: "+ fieldXML);
        formXML += fieldXML; */

        console.log(type,name,required,tip,predefinedValue,showLabel)
    });

    formXML += '</root>';
     alert("formXML: "+ formXML);
     console.log(JSON.stringify(formXML));

     /*YUI().use('aui-io-request',
                function(A) {           

            A.io.request(
                '<%=ajaxURL%>',{
                    data: {                         

                        formXML : formXML,

                    },
                    dataType: 'json',
                    on: {                                                                                            
                            success: function(data) {   
                                alert("Your form has been saved!")

                            },

                            error: function(jqXHR, textStatus, errorThrown) {

                                alert("Error, the content has not been saved! Please try again...");    
                                console.log(textStatus, errorThrown);                       

                                }           
                        }
                });    
                }); */


}




                