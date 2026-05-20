export const profile = {
  name: "Phạm Hoàng An",
  role: "AI/ML Intern",
  viRole: "Thực tập sinh AI/ML",
  location: "Hanoi, Vietnam",
  viLocation: "Hà Nội, Việt Nam",
  email: "hoanganpham01739@gmail.com",
  github: "https://github.com/AnHgPham",
  linkedin: "https://www.linkedin.com/in/anpham2005/",
  cv: "/assets/PhamHoangAn_CV_Intern.pdf",
  portrait: {
    webp: [
      "/assets/pham-hoang-an-480.webp 480w",
      "/assets/pham-hoang-an-720.webp 720w",
      "/assets/pham-hoang-an-960.webp 960w",
      "/assets/pham-hoang-an-1200.webp 1200w",
    ].join(", "),
    fallback: "/assets/pham-hoang-an-720.jpg",
  },
};

export const proofSignals = [
  { value: "22", label: "public repos", vi: "repo công khai" },
  { value: "3", label: "AI/CV case studies", vi: "case study AI/CV" },
  { value: "2025", label: "ML specialization", vi: "chứng chỉ ML" },
  { value: "USTH", label: "ICT student", vi: "sinh viên ICT" },
];

export const projects = [
  {
    id: "pickleball",
    title: "Pickleball Match Analysis",
    viTitle: "Phân tích trận đấu Pickleball",
    type: "Computer Vision / Video Intelligence",
    viType: "Computer Vision / Phân tích video",
    repo: "https://github.com/AnHgPham/computer-vision-pickleball-detection-court",
    demo: "https://drive.google.com/file/d/1-T7m2KjSCVFxOKF3X5jqs_or0lnsc-L7/view?usp=sharing",
    problem:
      "Turn match footage into measurable signals: court geometry, ball/player tracking, and reviewable outputs.",
    viProblem:
      "Chuyển video trận đấu thành tín hiệu có thể đo: hình học sân, tracking bóng/người chơi và output có thể kiểm tra.",
    approach:
      "Built a Python pipeline for court keypoints, YOLO detections, temporal smoothing, homography, minimap, and heatmap export.",
    viApproach:
      "Xây pipeline Python cho keypoint sân, YOLO detection, làm mượt theo thời gian, homography, minimap và xuất heatmap.",
    evidence:
      "12 court keypoints, 4-stage ball tracking cascade, 2D court projection, annotated video output.",
    viEvidence:
      "12 keypoint sân, cascade tracking bóng 4 bước, chiếu tọa độ lên sân 2D và video output đã annotate.",
    stack: ["YOLOv8-Pose", "OpenCV", "Kalman Filter", "Homography", "Python"],
  },
  {
    id: "kws",
    title: "Open-Set Keyword Spotting",
    viTitle: "Nhận diện từ khóa Open-Set",
    type: "Few-Shot Audio ML",
    viType: "Audio ML few-shot",
    repo: "https://github.com/AnHgPham/DoAnTotNghiep",
    demo: "",
    problem:
      "Detect custom keywords from a few examples while rejecting unknown audio in streaming use cases.",
    viProblem:
      "Nhận diện từ khóa tùy chỉnh từ rất ít mẫu, đồng thời từ chối âm thanh ngoài tập trong luồng streaming.",
    approach:
      "Implemented enrollment with prototype embeddings, thresholding, stream segmentation, voting, and cooldown control.",
    viApproach:
      "Triển khai enrollment bằng prototype embeddings, thresholding, chia đoạn stream, voting và cooldown control.",
    evidence:
      "3-5 sample enrollment, microphone streaming flow, open-set rejection, Colab/local runbooks.",
    viEvidence:
      "Đăng ký 3-5 mẫu, flow microphone streaming, cơ chế open-set rejection và runbook cho Colab/local.",
    stack: ["Python", "Audio ML", "Embeddings", "Open-set", "Streaming"],
  },
  {
    id: "waste",
    title: "Waste Classification System",
    viTitle: "Hệ thống phân loại rác",
    type: "Deep Learning / Real-Time CV",
    viType: "Deep Learning / Computer Vision thời gian thực",
    repo: "https://github.com/AnHgPham/waste_classifier",
    demo: "",
    problem:
      "Make waste recognition usable beyond training notebooks: image input, webcam inference, and evaluation.",
    viProblem:
      "Đưa bài toán phân loại rác ra khỏi notebook: xử lý ảnh, inference webcam và đánh giá model.",
    approach:
      "Combined MobileNetV2 classification and YOLOv8 detection for training, evaluation, and real-time demos.",
    viApproach:
      "Kết hợp MobileNetV2 classification và YOLOv8 detection cho training, evaluation và demo thời gian thực.",
    evidence:
      "10-class recognition, transfer learning, webcam labels, evaluation artifacts, TFLite path.",
    viEvidence:
      "Nhận diện 10 lớp, transfer learning, label webcam, artifact đánh giá và hướng chuyển sang TFLite.",
    stack: ["TensorFlow", "MobileNetV2", "YOLOv8", "TFLite", "OpenCV"],
  },
];

export const capabilityGroups = [
  {
    title: "Modeling",
    viTitle: "Mô hình hóa",
    text: "TensorFlow/Keras, PyTorch, scikit-learn, transfer learning, evaluation.",
    vi: "TensorFlow/Keras, PyTorch, scikit-learn, transfer learning, đánh giá model.",
  },
  {
    title: "Vision Pipelines",
    viTitle: "Pipeline thị giác máy tính",
    text: "YOLO, OpenCV, keypoints, tracking, homography, real-time inference.",
    vi: "YOLO, OpenCV, keypoints, tracking, homography, inference thời gian thực.",
  },
  {
    title: "ML Engineering",
    viTitle: "Kỹ thuật ML",
    text: "Python workflows, notebooks to scripts, CLI demos, reproducible runs.",
    vi: "Workflow Python, chuyển notebook thành script, CLI demo, chạy tái lập.",
  },
  {
    title: "Cloud Workflow",
    viTitle: "Workflow cloud",
    text: "Colab, Azure VM, Google Cloud, Git/GitHub, Linux CLI.",
    vi: "Colab, Azure VM, Google Cloud, Git/GitHub, Linux CLI.",
  },
];

export const timeline = [
  {
    period: "2023 - 2026",
    title: "USTH - Information and Communication Technology",
    viTitle: "USTH - Công nghệ Thông tin và Truyền thông",
    text: "Undergraduate ICT program focused on programming, AI/ML, computer vision, and applied software projects.",
    viText:
      "Chương trình đại học ICT tập trung vào lập trình, AI/ML, computer vision và các dự án phần mềm ứng dụng.",
  },
  {
    period: "2025",
    title: "Machine Learning Specialization - Stanford / DeepLearning.AI",
    viTitle: "Machine Learning Specialization - Stanford / DeepLearning.AI",
    text: "Coursera specialization in supervised learning, advanced learning algorithms, and practical ML foundations.",
    viText:
      "Chứng chỉ Coursera về supervised learning, thuật toán học máy nâng cao và nền tảng ML thực hành.",
  },
  {
    period: "2020 - 2023",
    title: "Chu Van An High School - Informatics Class",
    viTitle: "THPT Chu Văn An - Lớp chuyên Tin",
    text: "Informatics track with early foundations in programming and computational thinking.",
    viText: "Lớp chuyên Tin với nền tảng sớm về lập trình và tư duy tính toán.",
  },
];
