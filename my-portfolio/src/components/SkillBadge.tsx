function SkillBadge(skilll: any) {
    return (
        <section className="flex flex-wrap gap-1">
            {skilll.skillss.map((item: any) => {
                return (
                    <div className="flex px-2 rounded-md w-fit"
                        style={{
                            backgroundColor: item.rang,
                            color: item.matnrang
                        }}>
                        {item.title}
                    </div>
                )
            })}
        </section>
    )
}

export default SkillBadge