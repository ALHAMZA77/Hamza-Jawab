import { jsPDF } from 'jspdf';
import { cvData } from '../data/cvData';

export async function downloadCVPdf(options?: {
  fileName?: string;
  onProgress?: (step: string) => void;
}): Promise<string> {
  const fileName = options?.fileName || 'CV_Hamza_Jawab.pdf';
  options?.onProgress?.('Création du document PDF A4...');

  // Create A4 portrait document (210mm x 297mm)
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: true,
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const sidebarWidth = 14; // Left black bar width
  const contentLeft = 20; // Left margin for content
  const contentRight = 200; // Right boundary
  const contentWidth = contentRight - contentLeft; // 180mm

  // Helper: Draw black vertical sidebar with gold rotated text
  const drawSidebar = () => {
    // Dark black background
    doc.setFillColor(18, 18, 18);
    doc.rect(0, 0, sidebarWidth, pageHeight, 'F');

    // Gold rotated text
    doc.setTextColor(212, 175, 55);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.text(
      'HAMZA JAWAB : TECHNICIEN SPECIALISE EN DEVELOPPEMENT INFORMATIQUE',
      sidebarWidth / 2 + 1,
      pageHeight - 20,
      { angle: 90 }
    );
  };

  // Helper: Section title with bold text and horizontal rule
  const drawSectionTitle = (title: string, yPos: number): number => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(20, 20, 20);
    doc.text(title, contentLeft, yPos);

    // Separator line
    const lineY = yPos + 2;
    doc.setDrawColor(30, 30, 30);
    doc.setLineWidth(0.35);
    doc.line(contentLeft, lineY, contentRight, lineY);

    return lineY + 4;
  };

  // ==========================================
  // PAGE 1
  // ==========================================
  options?.onProgress?.('Génération de la Page 1...');
  drawSidebar();

  let y = 16;

  // Header Zone
  // Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(15, 15, 15);
  doc.text(cvData.personalInfo.name, contentLeft, y);
  y += 7;

  // Subtitle (spaced out)
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(40, 40, 40);
  doc.text('TECHNICIEN SPECIALISE EN DEVELOPPEMENT INFORMATIQUE', contentLeft, y);

  // Contact Info on right
  const contactX = 142;
  let contactY = 14;
  doc.setFontSize(7.5);
  doc.setTextColor(50, 50, 50);

  // Email
  doc.text(`[Email]  ${cvData.personalInfo.email}`, contactX, contactY);
  contactY += 4.5;
  // Phone
  doc.text(`[Tel]     ${cvData.personalInfo.phone}`, contactX, contactY);
  contactY += 4.5;
  // City
  doc.text(`[Ville]   ${cvData.personalInfo.city}`, contactX, contactY);

  y += 5;
  // Header divider
  doc.setDrawColor(30, 30, 30);
  doc.setLineWidth(0.4);
  doc.line(contentLeft, y, contentRight, y);
  y += 5;

  // PROFIL PROFESSIONNEL
  y = drawSectionTitle('PROFIL PROFESSIONNEL', y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(45, 45, 45);
  const profileLines = doc.splitTextToSize(cvData.profile, contentWidth);
  doc.text(profileLines, contentLeft, y);
  y += profileLines.length * 3.8 + 4;

  // PARCOURS PROFESSIONNEL
  y = drawSectionTitle('PARCOURS PROFESSIONNEL', y);

  // Experiences list
  cvData.experiences.forEach((exp) => {
    // Check if we need spacing adjustment
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(20, 20, 20);

    // Company name
    doc.text(exp.company, contentLeft, y);

    // Period on right
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(30, 30, 30);
    const periodWidth = doc.getTextWidth(exp.period);
    doc.text(exp.period, contentRight - periodWidth, y);
    y += 3.8;

    // Subtitle if exists (e.g. ONCF Stagiaire)
    if (exp.subtitle) {
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(7.5);
      doc.setTextColor(70, 70, 70);
      const subLines = doc.splitTextToSize(exp.subtitle, contentWidth - 4);
      doc.text(subLines, contentLeft + 3, y);
      y += subLines.length * 3.4;
    }

    // Tasks bullets
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(45, 45, 45);

    exp.tasks.forEach((task) => {
      const taskLines = doc.splitTextToSize(`•  ${task}`, contentWidth - 4);
      doc.text(taskLines, contentLeft + 3, y);
      y += taskLines.length * 3.3;
    });

    y += 1.8; // Small gap between experiences
  });

  // ==========================================
  // PAGE 2
  // ==========================================
  options?.onProgress?.('Génération de la Page 2...');
  doc.addPage('a4', 'portrait');
  drawSidebar();

  y = 16;

  // FORMATION
  y = drawSectionTitle('FORMATION', y);
  cvData.education.forEach((edu) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(35, 35, 35);
    doc.text(`•  ${edu.degree}`, contentLeft + 2, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(20, 20, 20);
    const yearWidth = doc.getTextWidth(edu.year);
    doc.text(edu.year, contentRight - yearWidth, y);
    y += 4.5;
  });
  y += 3;

  // LICENCES ET CERTIFICATIONS (French translation, without credential ID)
  y = drawSectionTitle('LICENCES ET CERTIFICATIONS', y);
  cvData.certifications.forEach((cert) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.2);
    doc.setTextColor(25, 25, 25);
    
    // Title + Issuer
    const certTitle = `•  ${cert.title} (${cert.issuer})`;
    doc.text(certTitle, contentLeft + 2, y);

    // Dates on right
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(60, 60, 60);
    const dateStr = `Émise ${cert.issueDate}${cert.expiryDate ? ` · Expire ${cert.expiryDate}` : ''}`;
    const dateWidth = doc.getTextWidth(dateStr);
    doc.text(dateStr, contentRight - dateWidth, y);

    y += 4.2;
  });
  y += 3;

  // COMPETENCES
  y = drawSectionTitle('COMPETENCES', y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(40, 40, 40);
  cvData.skills.forEach((skill) => {
    const skillLines = doc.splitTextToSize(`•  ${skill}`, contentWidth - 4);
    doc.text(skillLines, contentLeft + 2, y);
    y += skillLines.length * 3.4;
  });
  y += 3;

  // Bottom section: Two columns (LANGUES & CENTRES D'INTERET)
  const colWidth = (contentWidth - 8) / 2;
  const col2Left = contentLeft + colWidth + 8;
  const bottomYStart = y;

  // Column 1: LANGUES
  drawSectionTitle('LANGUES', bottomYStart);
  let yLang = bottomYStart + 7;
  cvData.languages.forEach((lang) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(25, 25, 25);
    doc.text(`${lang.name} :`, contentLeft + 2, yLang);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(50, 50, 50);
    doc.text(lang.level, contentLeft + 24, yLang);
    yLang += 4.5;
  });

  // Column 2: CENTRES D'INTERET
  drawSectionTitle('CENTRES D\'INTERET', bottomYStart);
  // Redraw titles properly for 2 columns
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(20, 20, 20);
  doc.text('CENTRES D\'INTERET', col2Left, bottomYStart);
  doc.setDrawColor(30, 30, 30);
  doc.setLineWidth(0.35);
  doc.line(col2Left, bottomYStart + 2, contentRight, bottomYStart + 2);

  let yInt = bottomYStart + 7;
  cvData.interests.forEach((item) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(25, 25, 25);
    doc.text(`${item.category} :`, col2Left + 2, yInt);
    yInt += 3.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.8);
    doc.setTextColor(50, 50, 50);
    const itemLines = doc.splitTextToSize(item.items, colWidth - 4);
    doc.text(itemLines, col2Left + 4, yInt);
    yInt += itemLines.length * 3.4 + 1.5;
  });

  options?.onProgress?.('Téléchargement du fichier...');

  // Create Blob & URL for 100% reliable download in any browser or iframe
  const blob = doc.output('blob');
  const blobUrl = URL.createObjectURL(blob);

  // Trigger download via anchor
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();

  setTimeout(() => {
    document.body.removeChild(link);
  }, 1000);

  return blobUrl;
}
