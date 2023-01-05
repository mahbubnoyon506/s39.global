import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from "react-draft-wysiwyg";
import { Button, Link, Typography } from "@mui/material";
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import './HowItWorksDashboard.css';

const HowItWorksDashboard = () => {
    const [value, setValue] = useState(() => EditorState.createEmpty());
    const data = draftToHtml(convertToRaw(value.getCurrentContent()));
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        // get page by page slug
        const getPage = async () => {
            await axios.get(`https://testnetback.s39global.com/api/v1/page/howitworks`)
                .then(res => {
                    const content = res.data.page.content;
                    const blocksFromHtml = htmlToDraft(content);
                    const { contentBlocks, entityMap } = blocksFromHtml;
                    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
                    setValue(EditorState.createWithContent(contentState));
                })
        };
        getPage();
    }, []);


    const updateHome = event => {
        event.preventDefault();
        axios.put("https://testnetback.s39global.com/api/v1/page/howitworks", {
            content: data
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("adminS39Global")}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    alert(res.data.message)
                }
            })
            .catch(err => {
                alert(err.response.data.message)
            })
    }

    return (
        <div className='text-light' style={{ minHeight: "100vh" }}>
            <form onSubmit={updateHome}>
                <div className=''>
                    <p className='dashboard-title' style={{ textTransform: 'uppercase' }}>How it works</p>
                    <div className='mt-3 ms-1'>
                        <Editor
                            editorState={value}
                            onEditorStateChange={setValue}
                            wrapperClassName="wrapper-class"
                            editorClassName="editor-class border mt-2 p-2 bg-white text-black"
                            toolbarClassName="toolbar-class text-black"
                            toolbar={{
                                image: {
                                    urlEnabled: true,
                                    uploadEnabled: true,
                                    alignmentEnabled: true,
                                    uploadCallback: undefined,
                                    previewImage: true,
                                    inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                    alt: { present: false, mandatory: false },
                                    defaultSize: {
                                        height: 'auto',
                                        width: 'auto',
                                    },
                                    fontFamily: {
                                        options: ['sans-serif', 'Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
                                        className: undefined,
                                        component: undefined,
                                        dropdownClassName: undefined,
                                    },
                                },
                            }}
                        />
                    </div>
                    <div>
                        <Button className="nftDrop mb-5 text-uppercase" type='submit'>Update now</Button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default HowItWorksDashboard;