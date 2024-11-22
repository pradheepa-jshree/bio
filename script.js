const organellesData = {
    nucleus: {
        description: "The nucleus is the control center of the cell, containing the DNA and overseeing cell activity.",
        facts: [
            "The nucleus is the largest organelle in the cell.",
            "It is surrounded by a double membrane called the nuclear envelope.",
            "The nucleus is where DNA is transcribed into RNA."
        ],
        coordinates: { top: "18%", left: "74%", size: "50px" }
    },
    mitochondria: {
        description: "Mitochondria are the powerhouse of the cell, producing energy through respiration.",
        facts: [
            "Mitochondria have their own DNA and can reproduce independently.",
            "They are the site of ATP production.",
            "Mitochondria are thought to have evolved from ancient bacteria."
        ],
        coordinates: { top: "19%", left: "18%", size: "47px" }
    },
    ribosomes: {
        description: "Ribosomes are the site of protein synthesis, reading mRNA to build proteins.",
        facts: [
            "Ribosomes can be found floating in the cytoplasm or attached to the rough ER.",
            "They are made of RNA and protein.",
            "Ribosomes are essential for translating genetic information into proteins."
        ],
        coordinates: { top: "14%", left: "82%", size: "50px" }
    },
    roughER: {
        description: "The rough endoplasmic reticulum (Rough ER) is involved in protein synthesis and transport.",
        facts: [
            "The Rough ER is studded with ribosomes on its surface.",
            "It plays a key role in the synthesis of proteins that are secreted from the cell.",
            "The Rough ER also helps fold proteins into their functional shapes."
        ],
        coordinates: { top: "30%", left: "55%", size: "47px" }
    },
    smoothER: {
        description: "The smooth endoplasmic reticulum (Smooth ER) synthesizes lipids and detoxifies harmful substances.",
        facts: [
            "The Smooth ER is involved in the production of lipids like cholesterol.",
            "It also helps detoxify drugs and poisons in the liver.",
            "Unlike the Rough ER, the Smooth ER lacks ribosomes."
        ],
        coordinates: { top: "49%", left: "38%", size: "47px" }
    },
    golgiApparatus: {
        description: "The Golgi apparatus packages proteins and lipids for secretion or delivery to other organelles.",
        facts: [
            "The Golgi apparatus is made up of a series of membrane-bound sacs called cisternae.",
            "It modifies proteins by adding carbohydrate chains to them (glycosylation).",
            "Proteins and lipids are packaged into vesicles for transport."
        ],
        coordinates: { top: "52%", left: "65%", size: "47px" }
    },
    lysosomes: {
        description: "Lysosomes break down waste materials and cellular debris using digestive enzymes.",
        facts: [
            "Lysosomes contain enzymes that break down macromolecules.",
            "They are responsible for digesting worn-out cell parts.",
            "Lysosomal storage diseases occur when these enzymes are missing or dysfunctional."
        ],
        coordinates: { top: "4%", left: "49%", size: "47px" }
    },
    nucleolus: {
        description: "Nucleolus, spherical body within the nucleus of most eukaryotic cells, involved in the synthesis of ribosomal RNA (rRNA) and the formation of ribosomes.",
        facts: [
            "The nucleolus is where ribosomal RNA (rRNA) is produced.",
            "It is not membrane-bound and appears as a dense region within the nucleus.",
            "The nucleolus plays a critical role in ribosome biogenesis."
        ],
        coordinates: { top: "16%", left: "64%", size: "50px" }
    },
    cytoskeleton: {
        description: "The cytoskeleton provides structural support and facilitates intracellular transport.",
        facts: [
            "The cytoskeleton is made up of microfilaments, intermediate filaments, and microtubules.",
            "It helps maintain cell shape and enables cell movement.",
            "The cytoskeleton is also involved in mitosis and intracellular transport."
        ],
        coordinates: { top: "75%", left: "23%", size: "47px" }
    },
    cellMembrane: {
        description: "The plasma membrane is the boundary of the cell, regulating what enters and exits the cell.",
        facts: [
            "The plasma membrane is composed of a phospholipid bilayer.",
            "It is selectively permeable, meaning it controls the movement of substances in and out of the cell.",
            "The membrane contains proteins that serve various functions like transport and signal reception."
        ],
        coordinates: { top: "75%", left: "50%", size: "47px" }
    },
    cytosol: {
        description: "Cytosol is the jelly-like fluid where organelles are suspended and chemical reactions occur.",
        facts: [
            "Cytosol is the liquid part of the cytoplasm, excluding organelles.",
            "It contains water, salts, and various organic molecules.",
            "Many metabolic processes, such as glycolysis, occur in the cytosol."
        ],
        coordinates: { top: "33%", left: "15%", size: "47px" }
    },
    vesicles: {
        description: "Vesicles transport materials between organelles and to/from the plasma membrane.",
        facts: [
            "Vesicles can carry proteins, lipids, and other molecules.",
            "They are formed by budding off from the membrane of one organelle and fuse with the membrane of another.",
            "Vesicles play a key role in endocytosis and exocytosis."
        ],
        coordinates: { top: "31%", left: "25%", size: "49px" }
    },
    centrosome: {
        description: "The centrosome organizes microtubules and is critical during cell division.",
        facts: [
            "The centrosome is made up of two centrioles.",
            "It is essential for the formation of the mitotic spindle during cell division.",
            "Centrosomes play a key role in organizing the microtubule network."
        ],
        coordinates: { top: "15%", left: "31%", size: "60px" }
    },
    vacuoles: {
        description: "Vacuoles store nutrients, waste products, and maintain osmotic balance in the cell.",
        facts: [
            "Vacuoles are large, membrane-bound sacs found in plant and fungal cells.",
            "In plant cells, vacuoles maintain turgor pressure, which helps keep the plant rigid.",
            "Vacuoles can also store pigments, poisons, or other substances."
        ],
        coordinates: { top: "49%", left: "22%", size: "55px" }
    }
};

function createOrganelle(name) {
    const organelle = document.createElement('div');
    organelle.className = 'organelle';
    organelle.style.top = organellesData[name].coordinates.top;
    organelle.style.left = organellesData[name].coordinates.left;
    organelle.style.width = organellesData[name].coordinates.size;
    organelle.style.height = organellesData[name].coordinates.size;
    
    organelle.onclick = () => showDescription(name);
    
    return organelle;
}

function showDescription(name) {
    const contentDiv = document.getElementById('content');
    const { description, facts } = organellesData[name];
    
    // Combine description and facts into a single display
    let factsList = "<ul>";
    facts.forEach(fact => {
        factsList += `<li>${fact}</li>`;
    });
    factsList += "</ul>";

    contentDiv.innerHTML = `<p><strong>${name.charAt(0).toUpperCase() + name.slice(1)}</strong>: ${description}</p>${factsList}`;
    contentDiv.classList.add('visible');
}

function initializeOrganelles() {
    const organellesContainer = document.getElementById('organelles');
    
    for (const organelle in organellesData) {
        const organelleElement = createOrganelle(organelle);
        organellesContainer.appendChild(organelleElement);
    }
}

// Initialize organelles on page load
window.onload = initializeOrganelles;
