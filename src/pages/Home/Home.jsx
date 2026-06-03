import TopSection from "../TopSection/TopSection.jsx";

import button from "../../assets/icons/button.svg";
import wheel from "../../assets/icons/wheel.svg";

export default function Home() {
    return (
        <>
            <TopSection
                first="월요일에 만나는" second="프론트엔드" third="한 스푼." mainImage={button} subImage={wheel}
            />
        </>
    );
}