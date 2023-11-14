import styled from "styled-components";
import {useEffect, useRef} from "react";
import Quill from "quill";

const EditorBlock = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  width: 100%;
`;

const HospitalInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  width: 100%;
`;

const StarPointInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
  width: 100%;
`;

const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }

  .ql-editor.ql-blank::before { /* 실제 내용 바로 앞에서 생성되는 자식 요소 */
    left: 0px;
  }
`;


const Editor = () => {
    const quillElement = useRef(null); // Quill을 적용할 DivElement
    const quillInstance = useRef(null); // Quill Instance

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'bubble',
            placeholder: '내용을 입력하세요.',
            modules: {
                toolbar: [
                    [{header: '1'}, {header: '2'}],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{list: 'ordered'}, {list: 'bullet'}],
                    ['blockquote', 'code-block', 'link', 'image'],
                ],
            },
        });
    }, []);

    return (
        <EditorBlock>
            <TitleInput placeholder="제목을 입력하세요."/>
            <HospitalInput placeholder="병원을 입력하세요."/>
            <StarPointInput placeholder="별점을 입력하세요."/>
            <QuillWrapper>
                <div ref={quillElement}/>
            </QuillWrapper>
        </EditorBlock>
    );
};

export default Editor;