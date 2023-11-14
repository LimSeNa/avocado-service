import styled from "styled-components";
import {useEffect, useRef} from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";


const ReviewEditorBlock = styled.div`
    margin-top: 100px;
`;

const HospitalInfo = styled.div`
    margin-bottom: 1rem;
`;

const HospitalInput = styled.input`

`;

const StarPointInput = styled.input`

`;

const TitleInput = styled.input`

`;

const QuillWrapper = styled.div`
  margin-bottom: 1rem;
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

const ImageInput = styled.input`

`;

const SelectBox = styled.select`

`;

const ReviewEditor = ({onChangeField, title, body, starPoint, targetHospital, targetDept, photoPath}) => {
    const quillElement = useRef(null);
    const quillInstance = useRef(null);

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme: 'snow',
            placeholder: '리뷰를 작성해 보세요.',
            modules: {
                toolbar: [
                    [{header: [1, 2, 3, 4, 5, 6, false]}],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{list: 'ordered'}, {list: 'bullet'}],
                    ['blockquote', 'code-block'],
                    ['link', 'image'],
                    [{color: []}, {background: []}],
                    [{align: []}],
                ],
            },
        });

        const quill = quillInstance.current;
        quill.on('text-change', () => {
            onChangeField({key: 'body', value: quill.root.innerHTML});
        });

    }, [quillInstance, quillElement, onChangeField]);

    const onChangeHospital = e => {
        onChangeField({key: 'targetHospital', value: e.target.value});
    };

    const onChangeStarPoint = e => {
        onChangeField({key: 'starPoint', value: e.target.value});
    };

    const onChangeTitle = e => {
        onChangeField({key: 'title', value: e.target.value});
    };

    const onChangePhoto = e => {
        onChangeField({key: 'photoPath', value: e.target.value});
    };

    const onChangeDept = e => {
        const targetDept = e.target.options[e.target.selectedIndex].value;
        onChangeField({key: 'targetDept', value: targetDept});
    };

    return (
        <ReviewEditorBlock>
            <HospitalInfo>
                <HospitalInput placeholder="병원 이름"
                               onChange={onChangeHospital}
                               value={targetHospital}
                />
                <SelectBox name="targetDept" onChange={e => onChangeDept(e)}>
                    <option value="">병과를 선택해 주세요.</option>
                    <option value="DENTAL">치과</option>
                    <option value="OPHTHALMOLOGY">안과</option>
                    <option value="DERMATOLOGY">피부과</option>
                    <option value="PLASTIC_SURGERY">성형외과</option>
                    <option value="OBSTETRICS">산부인과</option>
                    <option value="PSYCHIATRY">정신건강의학과</option>
                    <option value="ORTHOPEDICS">정형외과</option>
                    <option value="NEUROSURGERY">신경외과</option>
                    <option value="SURGICAL">외과</option>
                    <option value="NEUROLOGY">신경과</option>
                    <option value="PEDIATRIC">소아과</option>
                    <option value="INTERNAL_MEDICINE">내과</option>
                    <option value="OTOLARYNGOLOGY">이비인후과</option>
                    <option value="UROLOGY">비뇨기과</option>
                    <option value="ORIENTAL_MEDICAL">한의원</option>
                </SelectBox>
                <StarPointInput placeholder="별점"
                                type="number"
                                onChange={onChangeStarPoint}
                                value={starPoint}
                />
            </HospitalInfo>
            <TitleInput placeholder="제목"
                        onChange={onChangeTitle}
                        value={title}
            />
            <QuillWrapper>
                <div ref={quillElement}/>
            </QuillWrapper>
            <ImageInput placeholder="이미지 경로"
                        onChange={onChangePhoto}
                        value={photoPath}
            />
        </ReviewEditorBlock>
    );
};

export default ReviewEditor;