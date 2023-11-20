const InfoItem = ({infoItem}) => {
    const {writer, title, dept, healthInfoPath} = infoItem;

    return (
        <div>
            <a href={healthInfoPath}>{title}</a>
            <div>{writer}</div>
            <div>{dept}</div>
        </div>
    );
};

const HealthInfo = ({healthInfo, healthInfoError}) =>  {
    if (healthInfoError) return <div>건강 정보 목록 조회 실패</div>

    return (
        <div>
            {healthInfo.content.map(infoItem =>
                <InfoItem key={crypto.randomUUID()} infoItem={infoItem}/>
            )}
        </div>
    );
};

export default HealthInfo;