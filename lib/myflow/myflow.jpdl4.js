(function ($) {
    var myflow = $.myflow;

    $.extend(true, myflow.config.rect, {
        attr: {
            r: 8,
            fill: '#F6F7FF',
            stroke: '#03689A',
            "stroke-width": 2
        }
    });

    $.extend(true, myflow.config.props.props, {
        name: {
            name: 'name', label: '名称', value: '新建流程', editor: function () {
                return new myflow.editors.inputEditor();
            }
        },
        globalkey: {
            name: 'globalkey', label: '全局变量', value: '', editor: function () {
                return new myflow.editors.inputEditor();
            }
        }
    });


    $.extend(true, myflow.config.tools.states, {
        start: {
            showType: 'image',
            type: 'start',
            name: {text: '<<start>>'},
            text: {text: '开始'},
            img: {src: 'img/48/start.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '开始', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                }
            }
        },
        start_active: {
            showType: 'image',
            type: 'start',
            name: {text: '<<start>>'},
            text: {text: '开始'},
            img: {src: 'img/48/start_active.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '开始', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                }
            }
        },
        start_mark: {
            showType: 'image',
            type: 'start',
            name: {text: '<<start>>'},
            text: {text: '开始'},
            img: {src: 'img/48/start_mark.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '开始', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                }
            }
        },
        end: {
            showType: 'image', type: 'end',
            name: {text: '<<end>>'},
            text: {text: '结束'},
            img: {src: 'img/48/end.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '结束', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                }
            }
        },
        end_active: {
            showType: 'image', type: 'end',
            name: {text: '<<end>>'},
            text: {text: '结束'},
            img: {src: 'img/48/end_active.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '结束', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                }
            }
        },
        end_mark: {
            showType: 'image', type: 'end',
            name: {text: '<<end>>'},
            text: {text: '结束'},
            img: {src: 'img/48/end_mark.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '结束', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                }
            }
        },
       cancel: {
            showType: 'image', type: 'cancel',
            name: {text: '<<cancel>>'},
            text: {text: '取消'},
            img: {src: 'img/48/cancel.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '取消', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                }
            }
        },
        cancel_active: {
            showType: 'image', type: 'cancel',
            name: {text: '<<cancel>>'},
            text: {text: '取消'},
            img: {src: 'img/48/cancel_active.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '取消', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                }
            }
        },
       cancel_mark: {
            showType: 'image', type: 'cancel',
            name: {text: '<<cancel>>'},
            text: {text: '取消'},
            img: {src: 'img/48/cancel_mark.png', width: 48, height: 48},
            attr: {width: 48,height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '取消', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                }
            }
        },
        error: {
            showType: 'image', type: 'error',
            name: {text: '<<error>>'},
            text: {text: '错误'},
            img: {src: 'img/48/error.png', width: 24, height: 24},
            attr: {width: 24, height: 24},
            props: {
                show: {
                    name: 'show', label: '显示', value: '错误', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                }
            }
        },
        error_active: {
            showType: 'image', type: 'error',
            name: {text: '<<error>>'},
            text: {text: '错误'},
            img: {src: 'img/48/error_active.png', width: 24, height: 24},
            attr: {width: 24, height: 24},
            props: {
                show: {
                    name: 'show', label: '显示', value: '错误', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                }
            }
        },
        error_mark: {
            showType: 'image', type: 'error',
            name: {text: '<<error>>'},
            text: {text: '错误'},
            img: {src: 'img/48/error_mark.png', width: 24, height: 24},
            attr: {width: 24, height: 24},
            props: {
                show: {
                    name: 'show', label: '显示', value: '错误', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                }
            }
        },
        fork: {
            showType: 'image', type: 'fork',
            name: {text: '<<fork>>'},
            text: {text: '静态分支'},
            img: {src: 'img/48/static_branch.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '静态分支', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                },
                transformationGlobal: {
                    name: 'transformationGlobal', label: '转换全局', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                }
            }
        },
        fork_active: {
            showType: 'image', type: 'fork',
            name: {text: '<<fork>>'},
            text: {text: '静态分支'},
            img: {src: 'img/48/static_branch_active.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '静态分支', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                },
                transformationGlobal: {
                    name: 'transformationGlobal', label: '转换全局', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                }
            }
        },
        fork_mark: {
            showType: 'image', type: 'fork',
            name: {text: '<<fork>>'},
            text: {text: '静态分支'},
            img: {src: 'img/48/static_branch_mark.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '静态分支', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                },
                transformationGlobal: {
                    name: 'transformationGlobal', label: '转换全局', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                }
            }
        },
        foreach: {
            showType: 'image', type: 'foreach',
            name: {text: '<<foreach>>'},
            text: {text: '动态分支'},
            img: {src: 'img/48/dynamic_branch.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '动态分支', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                },
                foreachlist: {
                    name: 'foreachlist', label: '集合', value: '集合', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                },
                transformationGlobal: {
                    name: 'transformationGlobal', label: '转换全局', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                }

            }
        },
        foreach_active: {
            showType: 'image', type: 'foreach',
            name: {text: '<<foreach>>'},
            text: {text: '动态分支'},
            img: {src: 'img/48/dynamic_branch_active.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '动态分支', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                },
                foreachlist: {
                    name: 'foreachlist', label: '集合', value: '集合', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                },
                transformationGlobal: {
                    name: 'transformationGlobal', label: '转换全局', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                }

            }
        },
        foreach_mark: {
            showType: 'image', type: 'foreach',
            name: {text: '<<foreach>>'},
            text: {text: '动态分支'},
            img: {src: 'img/48/dynamic_branch_mark.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '动态分支', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                },
                foreachlist: {
                    name: 'foreachlist', label: '集合', value: '集合', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                },
                transformationGlobal: {
                    name: 'transformationGlobal', label: '转换全局', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                }

            }
        },
        time: {
            showType: 'image', type: 'time',
            name: {text: '<<time>>'},
            text: {text: '定时器'},
            img: {src: 'img/48/time.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '定时器', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                },
                transformationGlobal: {
                    name: 'transformationGlobal', label: '转换全局', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                }
            }
        },
        time_active: {
            showType: 'image', type: 'time',
            name: {text: '<<time>>'},
            text: {text: '定时器'},
            img: {src: 'img/48/time_active.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '定时器', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                },
                transformationGlobal: {
                    name: 'transformationGlobal', label: '转换全局', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                }
            }
        },
        time_mark: {
            showType: 'image', type: 'time',
            name: {text: '<<time>>'},
            text: {text: '定时器'},
            img: {src: 'img/48/time_mark.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '定时器', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                },
                transformationGlobal: {
                    name: 'transformationGlobal', label: '转换全局', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                }
            }
        },
        join: {
            showType: 'image', type: 'join',
            name: {text: '<<join>>'},
            text: {text: '合并'},
            img: {src: 'img/48/merge.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '静态分支', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                },
                transformationGlobal: {
                    name: 'transformationGlobal', label: '转换全局', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                }
            }
        },
        join_active: {
            showType: 'image', type: 'join',
            name: {text: '<<join>>'},
            text: {text: '合并'},
            img: {src: 'img/48/merge_active.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '静态分支', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                },
                transformationGlobal: {
                    name: 'transformationGlobal', label: '转换全局', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                }
            }
        },
        join_mark: {
            showType: 'image', type: 'join',
            name: {text: '<<join>>'},
            text: {text: '合并'},
            img: {src: 'img/48/merge_mark.png', width: 48, height: 48},
            attr: {width: 48, height: 48},
            props: {
                show: {
                    name: 'show', label: '显示', value: '静态分支', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                },
                transformationGlobal: {
                    name: 'transformationGlobal', label: '转换全局', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                }
            }
        },
        task: {
            showType: 'text', type: 'task',
            name: {text: '<<task>>'},
            text: {text: '任务'},
            attr: {width: 100, height: 50, fill: '#ffffff', stroke: "#353c48 ", r: 25},
            img: {src: 'img/48/task_sql.png', width: 0, height: 0},
            props: {
                text: {
                    name: 'text', label: '显示', value: '任务', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                },
                rolename: {
                    name: 'rolename', label: '角色(公司:部门:角色)', value: '::', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                },
                groupname: {
                    name: 'groupname', label: '用户组(公司:部门)', value: ':', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                },
                localkey: {
                    name: 'localkey', label: '回单变量', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                },
                transformationGlobal: {
                    name: 'transformationGlobal', label: '转换全局', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                }
            }
        },

        auto: {
            showType: 'text', type: 'auto',
            name: {text: '<<auto>>'},
            text: {text: '自动'},
            img: {src: 'img/48/task_sql.png', width: 0, height: 0},
            attr: {width: 100, height: 50, fill: '#ffffff', stroke: "#35d982", r: 50},
            props: {
                show: {
                    name: 'show', label: '显示', value: '自动', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                },
                transformationGlobal: {
                    name: 'transformationGlobal', label: '转换全局', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                }
            }
        },
        'subprocess': {
            showType: 'text', type: 'subprocess',
            name: {text: '<<subprocess>>'},
            text: {text: '子流程'},
            img: {src: 'img/48/task_sql.png', width: 0, height: 0},
            attr: {width: 100, height: 50, fill: '#ffffff', stroke: "#ff9500", r: 0},
            props: {
                show: {
                    name: 'show', label: '显示', value: '子流程', editor: function () {
                        return new myflow.editors.textEditor();
                    }
                },
                processname: {
                    name: 'processname', label: '流程名称', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                },
                invariablekey: {
                    name: 'invariablekey', label: '输入变量', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                },
                transformationGlobal: {
                    name: 'transformationGlobal', label: '转换全局', value: '', editor: function () {
                        return new myflow.editors.inputEditor();
                    }
                }

            }
        }
    });
})(jQuery);