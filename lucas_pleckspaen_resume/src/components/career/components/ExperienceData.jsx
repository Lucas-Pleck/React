const experienceData = [
  {
    title: '2019 2021',
    cardTitle: 'AREA MANAGER (PHARMACEUTICAL)',
    media: {
      name: 'aragan logo',
      source: {
        url: 'data:image/png;base64,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',
      },
      type: 'IMAGE',
    },
    cardSubtitle: 'LABORATOIRES ARAGAN',
    cardDetailedText: `Representation of the laboratory and its products to pharmacies and drugstores.
                      Ensure the sell-in and sell-out of products via training, challenges, partnerships, ...
                      Management and motivation of the team of trainers.
                      Management of regional groups.`,
  },
  {
    title: '2018 2021',
    cardTitle: 'SENIOR PHARMACEUTICAL REPRESENTATIVE',
    media: {
      name: 'Mayoly Spindler Logo',
      source: {
        url: 'data:image/png;base64,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',
      },
      type: 'IMAGE',
    },
    cardSubtitle: `LABORATOIRES MAYOLY SPINDLER`,
    cardDetailedText: `Representation of the laboratory and its products to pharmacies and drugstores.
                      Ensure the sell-in and sell-out of products via training, challenges, partnerships, ...
                      Management of regional groups.`,
  },
  {
    title: 'June 1941',
    cardTitle: 'Operation Barbarossa',
    media: {
      name: 'Operation Barbarossa',
      source: {
        url: 'https://cdn.britannica.com/01/150101-050-810CE9A9/soldiers-German-part-Soviet-Union-Operation-Barbarossa-1941.jpg',
      },
      type: 'IMAGE',
    },
    cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
    cardDetailedText: `Since the 1920s, Hitler had seen Russia, with its immense natural resources, as the principal target for conquest and expansion. It would provide, he believed, the necessary ‘Lebensraum’, or living space, for the German people. And by conquering Russia, Hitler would also destroy the “Jewish pestilential creed of Bolshevism”. His non-aggression pact with Stalin in August 1939 he regarded as a mere temporary expedient.
            Barely a month after the fall of France, and while the Battle of Britain was being fought, Hitler started planning for the Blitzkrieg campaign against Russia, which began on 22 June 1941. Despite repeated warnings, Stalin was taken by surprise, and for the first few months the Germans achieved spectacular victories, capturing huge swathes of land and hundreds of thousands of prisoners. But they failed to take Moscow or Leningrad before winter set in.
            On 5/6 December, the Red Army launched a counter-offensive which removed the immediate threat to the Soviet capital. It also brought the German high command to the brink of a catastrophic military crisis. Hitler stepped in and took personal command. His intervention was decisive and he later boasted, “That we overcame this winter and are today in a position again to proceed victoriously… is solely attributable to the bravery of the soldiers at the front and my firm will to hold out…”`,
  },
  {
    title: '7 December 1941',
    cardTitle: 'Pearl Harbor',
    cardSubtitle: `The destroyer USS Shaw explodes in dry dock after being hit by Japanese aircraft`,
    media: {
      source: {
        url: 'https://pearlharborwarbirds.com/wp-content/uploads/2016/09/Awesome-Color-Photos-of-the-Attack-on-Pearl-Harbor-1.jpg',
      },
      type: 'IMAGE',
      name: 'Pearl Harbor',
    },
    cardDetailedText: `After Japan’s occupation of French Indo-China in July 1941, US President Franklin D Roosevelt, followed by Britain and the Netherlands, ordered the freezing of Japanese assets.
            Many Japanese now believed that there was no alternative between economic ruin and going to war with the United States and the European colonial powers. In October 1941, a hardline government under General Hideki Tojo came to power, and preparations were made to deliver a devastating blow against the Americans.`,
  },
  {
    title: '15 February 1942',
    cardTitle: 'The fall of Singapore',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Surrender_Singapore.jpg',
      },
      name: 'Fall of singapore',
    },
    cardSubtitle: `Lieutenant General Arthur Percival and staff on their way to the Singapore Ford factory to negotiate the island’s surrender with General Yamashita`,
    cardDetailedText: `The Japanese began their invasion of Malaya on 8 December 1941, and very soon the British and empire defenders were in full retreat.
            Told previously that the Japanese were no match for European troops, morale among the defending forces slumped as General Tomoyuki Yamashita’s forces moved swiftly southwards towards Singapore.
            The sinking of the British capital ships HMS Prince of Wales and Repulse by Japanese aircraft also contributed to the decline in morale, and panic began to set in among the civil population and the fighting troops. British commander Lieutenant General Arthur Percival had hoped to make a stand at Johore, but was forced to withdraw to Singapore Island. The Japanese landed there on 8/9 February, and before long the defence collapsed. To avoid further bloodshed, and with his water supply gone, Percival surrendered on 15 February.
            Churchill described the surrender as, “the worst disaster… in British military history”. Over 130,000 British and empire troops surrendered to a much smaller Japanese force, which only suffered 9,824 battle casualties during the 70-day campaign. Singapore was not only a humiliating military defeat, but also a tremendous blow to the prestige of the ‘white man’ throughout Asia.`,
  },
  {
    title: '4 June 1942',
    cardTitle: 'Midway',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://dlbztvn8kichw.cloudfront.net/wp-content/uploads/2018/10/03131301/The-Battle-Of-Midway.jpg',
      },
    },
    cardSubtitle: `The American aircraft carrier USS Yorktown under Japanese attack during the battle of Midway`,
    cardDetailedText: `For six months after Pearl Harbor, just as Admiral Yamamoto predicted, Japanese forces carried all before them, capturing Hong Kong, Malaya, the Philippines and the Dutch East Indies. In May 1942, in an attempt to consolidate their grip on their new conquests, the Japanese sought to eliminate the United States as a strategic Pacific power.
            This would be done by luring into a trap the US navy carriers that had escaped Pearl Harbor, while at the same time the Japanese would occupy the Midway atoll in preparation for further attacks. The loss of the carriers would, the Japanese hoped, force the Americans to the negotiating table. In the event, it was the Americans who inflicted a crushing defeat on the Japanese. Their codebreakers were able to determine the location and date of the Japanese attack. This enabled US admiral Chester Nimitz to organise a trap of his own.
            During the ensuing battle the Japanese suffered the loss of four carriers, one heavy cruiser and 248 aircraft, while American losses totalled one carrier, one destroyer and 98 planes. By their victory at Midway, the turning point of the Pacific war, the Americans were able to seize the strategic initiative from the Japanese, who had suffered irreplaceable losses. Admiral Nimitz described the battle’s success as “Essentially a victory of intelligence”, while President Roosevelt called it “Our most important victory in 1942… there we stopped the Japanese offensive.”`,
  },
  {
    title: '25 October 1942',
    cardTitle: 'Alamein',
    cardSubtitle: `German prisoners of war wait for transport after their capture at Alamein`,
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://i.dailymail.co.uk/i/newpix/2018/03/08/11/49FEAE2A00000578-5477117-image-a-79_1520509429888.jpg',
      },
    },
    cardDetailedText: `The North African campaign began in September1940, and for the next two years the fighting was marked by a succession of Allied and Axis advances and retreats. In the summer of 1942, the Axis forces under ‘Desert Fox’ field marshal, Erwin Rommel, looked poised to take Cairo and advance on the Suez Canal.
            The British Middle East commander General Claude Auchinleck took personal command of the defending Eighth Army and halted the retreat at the strong defensive line at El Alamein. But Churchill, dissatisfied with Auchinleck, replaced him in August with General Harold Alexander, while Lieutenant -General Bernard Montgomery took over command of the Eighth Army.
            Montgomery immediately began to build up an enormous superiority in men and equipment, finally launching his offensive at Alamein on 23 October 1942. By the beginning of November, the Axis forces were in full retreat, although final victory in North Africa was not achieved until May 1943.
            Although Montgomery has been criticised for being too cautious in exploiting his success at Alamein, it made him a household name and he became Britain’s most popular general of the war. Churchill hailed Alamein as a “Glorious and decisive victory… the bright gleam has caught the helmets of our soldiers, and warmed and cheered all our hearts”.`,
  },
  {
    title: 'February 1943',
    cardTitle: 'Stalingrad',
    cardSubtitle: `Red Army soldiers hoist the Soviet flag over a recaptured Stalingrad factory following the German surrender`,
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://www.thesun.co.uk/wp-content/uploads/2018/02/nintchdbpict000382291893.jpg',
      },
    },
    cardDetailedText: `Throughout September and October, under General Vassili Chuikov, the city’s defenders contested every yard of ground of the devastated city.
            The Red Army’s stubborn defence allowed General Georgi Zhukov time to prepare a counterattack that was launched on 19 November 1942, and which soon trapped the Sixth Army commanded by General Friederich Paulus.
            Hitler, wrongly assured by Göring that the Luftwaffe could supply Stalingrad by air, ordered Paulus to hold out. He also ordered Field Marshal Erich Manstein to break through and relieve the beleaguered Sixth Army. Manstein was unsuccessful, and on 31 January 1943 Paulus capitulated. Of the 91,000 German troops who went into captivity, less than 6,000 returned home after the war. Stalingrad was one of Germany’s greatest defeats, and it effectively marked the end of Hitler’s dreams of an empire in the east.
            `,
  },
  {
    title: '6 June 1944',
    cardTitle: 'D-Day, Operation Overlord',
    cardSubtitle: `British commandos of the First Special Service Brigade land on Sword Beach`,
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://www.britishpoles.uk/wp-content/uploads/2019/06/D-Day-landings-1.jpg',
      },
    },
    cardDetailedText: `Operation Overlord, the invasion and liberation of north-west Europe, began on D-Day, 6 June 1944.
            That day, under the overall command of US General Dwight Eisenhower, British, Canadian and American troops, supported by the Allied navies and air forces, came ashore on the coast of Normandy. By the end of the day, 158,000 men, including airborne troops, had landed. Initially, except on the American Omaha beach, German resistance was unexpectedly light. But it soon stiffened and the Allied breakout from the beachhead area was painfully slow.
            The fierceness of the fighting can be gauged by the fact that in Normandy British infantry battalions were suffering the same percentage casualty rates as they had on the Western Front in 1914–1918. Eventually the breakout was achieved, and on 25 August, Paris was liberated. Brussels followed on 3 September. Hopes that the war might be won in 1944 were dashed by the Allied failure at Arnhem and the unexpected German offensive in the Ardennes in December.
            It was not until 4 May 1945 that the German forces in north-west Europe surrendered to Montgomery at his HQ on Lüneburg Heath.`,
  },
  {
    title: 'February 1945',
    cardTitle: 'The Big Three',
    cardSubtitle: `Churchill, Roosevelt and Stalin sit for a group photograph during the Yalta conference`,
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://1.bp.blogspot.com/-GGJh_zNQ5IQ/XQvEH7JYOlI/AAAAAAAADJA/TO-j7KLr5q0zUaPhpl2KvoxihXVwBesjwCLcBGAs/s1600/Yalta_Conference_%2528Churchill%252C_Roosevelt%252C_Stalin%2529.jpg',
      },
    },
    cardDetailedText: `Between June 1940 and June 1941, Britain stood alone against Hitler. But then, after the German invasion of Russia and the Japanese attack on Pearl Harbor, she gained two powerful allies.
            For the next four years Churchill did his utmost to foster ‘The Grand Alliance’ against the Nazis. He even earned the grudging admiration of Nazi propaganda chief Dr Goebbels who said, “…I can feel only respect for this man, for whom no humiliation is too base and no trouble too great when the victory of the Allies is at stake”.
            Churchill conferred with both Roosevelt and Stalin to hammer out strategy and to discuss postwar arrangements. The three men congregated for the first time at Tehran in November 1943. There, and again at their last meeting at Yalta, Churchill was conscious of the fact that Britain, exhausted by her war effort, was now very much the junior partner of the two emerging superpowers.`,
  },
  {
    title: '13/14 February 1945',
    cardTitle: 'Dresden',
    cardSubtitle: `Dresden under incendiary bomb attack`,
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://i.pinimg.com/originals/7f/13/57/7f1357ae886a0cfd317c2abbc232e637.jpg',
      },
    },
    cardDetailedText: `At Yalta, an Allied plan to bomb the hitherto untouched city of Dresden was discussed. The reason for attacking the city was due principally to its strategic importance as a communications centre in the rear of the German retreat that followed the Soviet winter offensive of January 1945. It was also believed that Dresden might be used as an alternative to Berlin as the Reich capital.
            The attack was part of a plan codenamed ‘Thunderclap’, designed to convince the Germans that the war was lost. It was drawn up in January 1945, when Hitler’s Ardennes offensive, V2 rocket attacks on Britain and the deployment of snorkel-equipped U-boats clearly demonstrated that Germany was still capable of offering stubborn resistance. Strategic bombing attacks had previously failed to break Germany, although they had proved valuable in reducing its capacity to wage war.
            Now, on the night of 13/14 February 1945, Dresden was attacked by 800 RAF bombers, followed by 400 bombers of the United States Army Air Force. The bombing created a firestorm that destroyed 1,600 acres of Dresden. Even today it is still uncertain as to how many died and estimates have ranged from 25,000 to 135,000. Most authorities now put the death toll at around 35,000. The scale of destruction, the enormous death toll, and its timing at such a late stage in the war, have all ensured that the bombing of Dresden still remains highly controversial.`,
  },
  {
    title: '8 May 1945',
    cardTitle: 'VE Day',
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://ic.c4assets.com/brands/ve-day-in-colour-britains-biggest-party/d708c2d9-8fec-4592-a90f-ddfe3513c914.jpg?interpolation=progressive-bicubic&output-quality=90',
      },
    },
    cardSubtitle: `millions of people rejoice in the news that Germany has surrendered – the war in Europe was finally over`,
    cardDetailedText: `On the afternoon of 8 May 1945, the British prime minister Winston Churchill made the radio announcement that the world had long been waiting for.
            “Yesterday morning,” he declared, “at 2.41 a.m., at General Eisenhower’s headquarters, General Jodl, the representative of the German High Command, and Grand Admiral Dönitz, the designated head of the German State, signed the act of unconditional surrender of all German land, sea and air forces in Europe.”
            After nearly six years, the war in Europe was finally over.`,
  },
  {
    title: '9 August 1945',
    cardTitle: 'Nagasaki',
    cardSubtitle: `Atomic bomb mushroom cloud over the Japanese city of Nagasaki`,
    media: {
      type: 'IMAGE',
      source: {
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Atomic_bombing_of_Japan.jpg',
      },
    },
    cardDetailedText: `The Second World War began at dawn on Friday 1 September 1939, when Adolf Hitler launched his invasion of Poland.
            The Poles fought bravely, but they were heavily outnumbered in both men and machines, and especially in the air. Britain and France declared war on Germany on 3 September 1939, but gave no real assistance to Poland. Two weeks later, Stalin invaded eastern Poland, and on 27 September Warsaw surrendered. Organised Polish resistance ceased after another week’s fighting. Poland was divided up between Hitler and Stalin.
            In Poland the Nazis unleashed a reign of terror that was eventually to claim six million victims, half of whom were Polish Jews murdered in extermination camps. The Soviet regime was no less harsh. In March and April 1940, Stalin ordered the murder of over 20,000 Polish officers and others who had been captured in September 1939. Tens of thousands of Poles were also forcibly deported to Siberia.
            By May 1945, and despite his promises to Churchill and Roosevelt, Stalin had installed a subservient communist regime in Poland.
            Back in 1939, Poland’s then-leader Marshal Eduard Smigly-Rydz had warned, “With the Germans we risk losing our liberty, but with the Russians we lose our soul.”`,
  },
];

export default experienceData;
