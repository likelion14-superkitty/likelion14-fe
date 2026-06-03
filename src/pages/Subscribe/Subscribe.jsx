import styled from "styled-components";
import letter from "../../assets/images/letter.svg";
import TopSection from "../TopSection/TopSection.jsx";
import CollabSection from "../CollabSection/CollabSection.jsx";

export default function Subscribe() {
    return (
        <>
            <TopSection 
                first="매주 만나는" second="멋쟁이사자" third="뉴스레터."
                mainImage={letter} width="379.41px" height="408.60px" left="509px" top="738.39px" transform="rotate(-11deg)"
            />
            <CollabSection />
        </>
    );
}