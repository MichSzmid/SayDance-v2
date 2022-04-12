import React,{useState} from 'react';

const Rules = () => {
    const [revealRules, setRevealRules] = useState(false);
    const revealContent = () => {
        setRevealRules(true);
    }
    const hideConent = () => {
        setRevealRules(false);
    }

    return( 
        <section className="content rules">
            <p className="content-title">Regulamin Say Dance</p>
            <div className="rules-content" onClick={revealContent} onDoubleClick={hideConent}>
                <div className={revealRules ? "toggle-element" : "rules-content--button"}>
                    <h2>↓ Rozwiń ↓</h2>
                    <h3>( kliknij dwukrotnie, aby ukryć )</h3>
                </div>
                <div className={revealRules ? "rules-content--revealed" : "toggle-element"}>
                    <ol type="I">
                       <li>DEFINICJE</li>
                    <ol>
                        <li>SD - Katarzyna Szymiczek SayDance</li>
                        <li>Cennik - aktualne ceny zajęć, warsztatów i innych projektów tanecznych prowadzonych w SayDance jest dostępny w siedzibie firmy.</li>
                        <li>Oferta - lista zajęć, aktualnie dostępna na stronie internetowej.</li>
                        <li>Regulamin - zasady uczestnictwa oraz płatności za zajęcia taneczne w SD.</li>
                        <li>Uczestnik/kursant – osoba dobrowolnie korzystająca z usług oferowanych przez SD.</li>
                        <li>Instruktor – osoba prowadząca zajęcia.</li>
                        <li>Sala taneczna - sala treningowa, na której odbywają się zajęcia grupowe, bądź lekcje prywatne.</li>
                        <li>Kurs – zajęcia prowadzone przez instruktorów, w ramach oferty SD.</li>
                        <li>RODO – Rozporządzenie o ochronie danych osobowych.</li>
                    </ol>
                    <li>POSTANOWIENIA OGÓLNE</li>
                    <ol>
                        <li>Katarzyna Szymiczek SayDance, z siedzibą w Bytomiu ul. Siemianowicka 84, kod pocztowy 41-902, REGON 520407851, NIP 6452572028 
                            tel. +48 886 097 832, email: hello.saydance@gmail.com, działa na podstawie wpisu do ewidencji działalności gospodarczej (CEIDG).</li>
                        <li>W ramach działalności SD organizuje zajęcia taneczne oraz pochodne inicjatywy zgodnie z ofertą i cennikiem.</li>
                        <li>Celem wzięcia udziału w zajęciach wszyscy Kursanci korzystający z usług SD zobowiązani są podporządkować się
                            zapisom przedmiotowego regulaminu oraz zaleceniom i wskazówkom Instruktora.</li>
                        <li>Niniejszy regulamin określa zasady korzystania zusług oferowanych przez SD oraz prawa i obowiązki Kursantów.</li>
                    </ol>
                    <li>ZAPISY NA ZAJĘCIA</li>
                    <ol>
                        <li>Zapisu na wybrane zajęcia do danej grupy można dokonać na trzy sposoby: 
                            mailowo, telefonicznie lub wypełniając formularz zapisu zamieszczony na stronie www.saydance.pl.</li>
                        <li>Przyjęcie do grupy następuje po dokonaniu wpłaty i przesłaniu potwierdzenia zapłaty 24h przed rozpoczęciem zajęć.</li>
                        <li>Kursantem może zostać każda osoba, która zapoznała się i zaakceptowała przedmiotowy regulamin,
                                zawarła stosowną umowę z SD i dokonała odpłatności za zajęcia zgodnie z obowiązującym cennikiem
                                lub też w jej imieniu takiej płatności dokonuje jej opiekun prawny.</li>
                        <li>Cena za zajęcia jest zgodna z aktualnie obowiązującym cennikiem dostępnym w siedzibie SD, bądź pod numerem telefonu +48 886 097 832.</li>
                        <li>Liczba miejsc w grupach jest ograniczona i decyduje o niej SD.</li>
                        <li>Kursant, który dokonał wpłaty, jednak nie stawił się na pierwszych zajęciach i nie zgłosił nieobecności,
                                powinien w ciągu trzech dni od terminu tych zajęć poinformować SD o chęci uczestniczenia w kolejnych zajęciach.
                                W przeciwnym wypadku SD zastrzega sobie prawo do usunięcia tej osoby z listy bez konieczności jej powiadamiania i zwrócenia wniesionej opłaty.</li>
                        <li> SD poinformuje Kursanta telefonicznie lub za pomocą sms-a o terminie rozpoczęcia kursu.</li>
                        <li> Wskazany termin rozpoczęcia kursu może ulec zmianie w przypadku, gdy liczba uczestników jest zbyt mała.</li>
                    </ol>
                    <li>OPŁATY</li>
                    <ol>
                        <li> Opłat za zajęcia, pakiety zajęć lub karnety na wybrane zajęcia można dokonać w następujący sposób:
                            przelewem na konto bankowe 60 1050 1230 1000 0097 4560 5981.</li>
                        <li> Płatność za zajęcia jest wnoszona w systemie karnetowym lub za konkretne zajęcia w danym dniu tygodnia,
                                o którym traktuje p.5 przedmiotowego rozdziału Każdy wykupiony karnet jest imienny i dotyczy jednej osoby.
                                Jest przypisany do konkretnie wybranych zajęć i obejmuje kolejne zajęcia w ilości odpowiadającej wybranemu karnetowi.
                                Liczone od początku miesiąca kalendarzowego.</li>
                        <li> Uczestnik ma możliwość wyboru zajęć pojedynczych albo karnetu zajęć, jednego spośród poniższych:
                            <ol type="a">
                                <li> karnet 4 kolejnych zajęć w wybranej grupie,</li>
                                <li> karnet 8 kolejnych zajęć w wybranej grupie (dotyczy zajęć, które trwają 60 min),</li>
                                <li> pojedyncze wejście na zajęcia w wybranej grupie (dotyczy zajęć CardioDance),</li>
                                <li> jednorazowe wejścia w konkretny dzień tygodnia, o którym traktuje p.5 przedmiotowego rozdziału,</li>
                                <li> karnet 4 kolejnych zajęć w wybranej grupie dla pary (dotyczy zajęć Tańce w Parach).</li>
                                </ol>
                            </li>
                        <li> Rodzaje opłat za zajęcia zależą od wybranego kursu.</li>
                        <li> SD organizuje także zajęcia, zajęcia na które Kursanci mogą wchodzić jednorazowo, tylko w konkretny dzień tygodnia</li>
                        <li> W przypadku dokonywania opłaty za pomocą przelewu bankowego Kursant ma obowiązek podać w jego tytule swoje imię i nazwisko,
                                rodzaj zajęć, dzień w którym się odbywają oraz godzinę.</li>
                        <li> Opłata i uczestnictwo w zajęciach jest jednoznaczna z akceptacją niniejszego regulaminu.</li>
                        <li> Opłata za zajęcia powinna być uregulowana zgodnie z cennikiem dostępnym w siedzibie SD, przed rozpoczęciem zajęć.</li>
                        <li> Brak obecności kursanta na zajęciach nie powoduje przeniesienia przez karnet wejścia Kursanta na zajęcia w kolejnym po nieobecności tygodniu.</li>
                    </ol>
                    <li>ODWOŁYWANIE ZAJĘĆ I ZASTĘPSTWA</li>
                    <ol>
                        <li>SD powiadamia Kursantów o odwołaniu zajęć za pomocą wiadomości sms lub telefonicznie oraz w miejscu, w którym zwyczajowo odbywają się zajęcia.</li>
                        <li>SD zastrzega sobie możliwość rozwiązania grupy w następujących przypadkach: 
                                zapisania się na kurs mniejszej liczby osób niż minimalna liczba uczestników potrzebna do jego rozpoczęcia, 
                                zmniejszenia się liczby osób uczęszczających na zajęcia poniżej minimalnej liczby uczestników potrzebnej do jego kontynuacji.</li>
                        <li>W przypadku rozwiązania grupy, SD zwraca wpłacone opłaty za dany miesiąc (proporcjonalnie do odbytych już zajęć),
                                umożliwia przepisanie się do innej grupy, w której są miejsca lub proponuje uczestnictwo w innych zajęciach.</li>
                        <li>W przypadku choroby instruktora bądź innej losowej przyczyny uniemożliwiającej stawienie się prowadzącego na kurs, 
                                SD organizuje zastępstwo, bez konieczności wcześniejszego poinformowania kursantów o tym fakcie.</li>
                        <li>SD zastrzega sobie prawo odwołania poszczególnych zajęć w przypadkach: gdy nie ma wymaganej ilości osób potrzebnych do przeprowadzenia zajęć,
                                braku możliwości zorganizowania zastępstwa w sytuacji nieobecności instruktora.</li>
                        <li>SD zastrzega sobie możliwość odwołania poszczególnych zajęć w przypadkach niezależnych od SD takich w szczególności jak zakaz administracyjny, 
                                stan zagrożenia epidemiologicznego, stanu epidemii, stanu wyjątkowego, stanu wyjątkowego, stanu wojennego, stanu klęski żywiołowej, 
                                stanu zagrożenia terrorystycznego lub innych nadzwyczajnych okoliczności, których występowania zagraża życiu lub zdrowia Kursantów lub Instruktorów.</li>
                        <li>W wypadkach wymienionych w p. 6 SD może prowadzić zajęcia w formie zdalnej</li>
                    </ol>
                    <li>UCZESTNICTWO W ZAJĘCIACH</li>
                    <ol>
                        <li>Przedmiotem usługi jest możliwość skorzystania z wiedzy i doświadczenia Instruktora. 
                            Zajęcia prowadzone w SD są zajęciami technicznymi, opartymi o konkretną technikę lub elementy techniczne o charakterze sportowym i rekreacyjnym.</li>
                        <li> SD zobowiązuje się do prowadzenia zajęć w wyznaczonych terminach zgodnie z obowiązującym grafikiem.</li>
                        <li> SD nie zwraca opłaty za zajęcia, w których uczestnik nie brał udziału z własnej winy.</li>
                        <li> Uczestnikami zajęć są osoby, które uiściły opłatę za zajęcia. Kursant, który przebywa na sali, a nie ma opłaconych zajęć zostanie poproszony o jej opuszczenie.</li>
                        <li> Nie ma możliwości odrabiania zajęć.</li>
                        <li> Za zachowanie, które innym uczestnikom przeszkadza w zajęciach instruktor ma prawo wyprosić Kursanta z sali.</li>
                        <li> Kursant zobowiązany jest do bezwzględnego wykonywania poleceń Instruktora.</li>
                        <li> W trakcie zajęć na sali nie mogą przebywać osoby trzecie niebędące Kursantami, chyba że Instruktor wyrazi na to zgodę.</li>
                    </ol>
                    <li>BEZPIECZEŃSTWO</li>
                    <ol>
                        <li>SD nie ubezpiecza Kursantów od nieszczęśliwych wypadków, 
                            ani nie ponosi odpowiedzialności za nieszczęśliwe wypadki lub kontuzje powstałe w trakcie 
                            trwania zajęć i zachęca do ubezpieczenia się we własnym zakresie.</li>
                        <li>SD informuje, że dochowa wszelkiej staranności w celu maksymalnego zabezpieczenia uczestnika zajęć.
                            Jednocześnie Kursant (opiekun prawny) deklaruje, że będzie rościł sobie prawa do odszkodowania i zadośćuczynienia
                            w przypadku doznania kontuzji lub uszczerbku na zdrowiu, który został doznany w wyniku
                            niedostosowania się do poleceń i uwag instruktora lub korzystania ze sprzętu w sposób 
                            niezgodny z przepisami i niniejszym regulaminem.</li>
                        <li>Kursanci są zobowiązani zgłaszać Instruktorowi przed zajęciami wszelkie dolegliwości zdrowotne,
                            złe samopoczucie, urazy, kontuzje etc.</li>
                        <li>Na salę taneczną można wejść tylko w obuwiu zmiennym. W przeciwnym wypadku instruktor ma prawo wyprosić Kursanta z zajęć.
                            Kursant po zmianie obuwia ma prawo powrócić na zajęcia. Opłata za zajęcia, w których Kursant został usunięty za brak obuwia na zmianę nie jest zwracana.</li>
                        <li>Dla bezpieczeństwa i komfortu należy zmieniać również strój, o ile wymaga tego dany styl tańca.
                            Informacje o stosownym obuwiu i stroju udziela instruktor.</li>
                        <li>Za mienie kursantów pozostawione na terenie SD, a także w szafkach SD nie ponosi odpowiedzialności.
                            Kursant może zabrać je ze sobą na salę, w której odbywają się zajęcia.W przypadku kradzieży uczestnik 
                            zajęć powinien niezwłocznie poinformować instruktora o zaistniałej kradzieży.</li>
                        <li>Uczestnicy zajęć tanecznych są narażeni na wysokie natężenie dźwięku.</li>
                        <li>Osoba zapisująca się na zajęcia w SD, potwierdza brak przeciwwskazań zdrowotnych do uczęszczania na zajęcia.</li>
                        <li>Kursanci zobowiązani są do przestrzegania przepisów BHP i p-poż. obowiązujących w miejscu prowadzenia zajęć, jak również do poszanowania mienia SD.</li>
                    </ol>
                    <li>POZOSTAŁE POSTANOWIENIA</li>
                    <ol>
                        <li> Kursant ponosi pełną odpowiedzialność finansową za szkody materialne, na które narazi SD powstałe w wyniku jego działania.</li>
                        <li> Na terenie SD obowiązuje całkowity zakaz palenia tytoniu, spożywania alkoholu oraz posiadania i zażywania środków odurzających.</li>
                        <li> Osoby niepełnoletnie są reprezentowane w zakresie praw i obowiązków przez rodziców lub opiekunów prawnych.</li>
                        <li> Regulamin SD jest dostępny na stronie internetowej www.saydance.pl.</li>
                        <li> W kwestiach nieuregulowanych w Regulaminie zastosowanie mają odpowiednie przepisy Kodeksu Cywilnego.</li>
                    </ol>
                    <li>OCHRONA PRYWATNOŚCI</li>
                    <ol>
                        <li style={{listStyleType:"none"}}>Zgodnie z art. 13 ust. 1 i 2 rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679
                            z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych
                            i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)
                            (Dz. Urz. UE L 119 z 04.05.2016, str. 1. i Dz.Urz. L 127 z 23.05.2018, str.2.), dalej „RODO”, informuje się, że:</li>
                        <li>Administratorem Pani/Pana danych osobowych, 
                            w tym wizerunku, jest Katarzyna Szymiczek SayDance, 
                            z siedzibą w Bytomiu ul. Siemianowicka 84, kod pocztowy 41-902, 
                            REGON 520407851, NIP 6452572028 tel. +48 886 097 832, email: hello.saydance@gmail.com</li>
                        <li>Dane osobowe będą przetwarzane w celach informacyjnych i 
                            promocyjnych związanych z prowadzoną przez Katarzyna Szymiczek SayDance działalnością, 
                            w tym zamieszczania w Internecie oraz za pośrednictwem portali społecznościowych – 
                            na podstawie udzielonej przez Panią/Pana zgody stosownie do art. 6 ust. 1 lit. a RODO.</li>
                        <li>Odbiorcą danych osobowych są podmioty upoważnione na podstawie przepisów prawa 
                            (w tym właściwe organy podatkowe, inne organy administracji państwowej, 
                            biuro rachunkowe prowadzące księgowość działalności Katarzyny Szymiczek.</li>
                        <li>Konieczność podania danych osobowych jest niezbędna do świadczenia usług; 
                            ich niepodanie uniemożliwia świadczenia usług przez Katarzyna Szymiczek SayDance.</li>
                        <li>Uczestnik dobrowolnie podaje swoje dane osobowe i potwierdza ich prawdziwość.</li>
                        <li>Uczestnik wyraża zgodę na przetwarzanie swoich danych osobowych podanych w celu organizacji zajęć,
                            w zakresie: imię, nazwisko, e-mail, numer telefonu.</li>
                        <li>Uczestnik zobowiązuje się poinformować SD o każdej zmianie nr telefonu, adresu e-mail,
                            czy innych danych osobowych</li>
                        <li>Ma Pani/Pan w każdym czasie prawo dostępu do swoich danych osobowych, ich sprostowania,
                            ograniczenia przetwarzania oraz prawo do wniesienia sprzeciwu wobec przetwarzania,
                            prawo do przenoszenia danych oraz prawo do wniesienia skargi do organu nadzorczego.</li>
                    </ol>
                    <li>ZGODA NA PRZETWARZANIE WIZERUNKU</li>
                    <ol>
                        <li>Na podstawie art. 6 ust. l lit. A Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. 
                        w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych
                        oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) wyrażam zgodę na przetwarzanie moich danych osobowych
                        w zakresie wizerunku (nieodpłatnie oraz bez ograniczeń czasowych), 
                        na potrzeby niezbędne do prowadzenia działalności oraz wykonywania czynności związanych
                        z realizacją umowy przez Katarzyna Szymiczek SayDance, a także do celów związanych
                        z promocją i reklamą SD, w tym na stronie internetowej www.saydance.pl oraz
                        na portalach społecznościowych SD, oraz do budowania pozytywnego wizerunku w przestrzeni publicznej i w mediach.
                        </li>
                    </ol>  
                    </ol>         
               </div>
            </div>
        </section>
    )
};

export default Rules;