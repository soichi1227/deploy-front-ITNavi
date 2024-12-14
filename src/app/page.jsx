"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SalesManagement = () => {
  const [deals, setDeals] = useState([]);
  const [selectedDeal, setSelectedDeal] = useState(null);
  const router = useRouter();

  // ダミーデータ取得関数
  const fetchDeals = async () => {
    // 仮の商談データ
    const dummyData = [
      {
        id: 1,
        date: "2024-12-10 10:00",
        company: "株式会社A",
        department: "営業部",
        position: "部長",
        representative: "田中 太郎",
        industry: "IT",
        revenue: "50億円",
        survey1: "①基幹システム、業務システム周辺の課題",
        survey2: "ベンダーコントロールが上手くいっておらず、イニシアティブを取られている",
      },
      {
        id: 2,
        date: "2024-12-11 14:00",
        company: "株式会社B",
        department: "開発部",
        position: "課長",
        representative: "佐藤 花子",
        industry: "製造",
        revenue: "100億円",
        survey1: "②データ管理と活用の課題",
        survey2: "特に記載なし",
      },
      {
        id: 3,
        date: "2024-12-12 16:00",
        company: "株式会社C",
        department: "DX部",
        position: "係長",
        representative: "鈴木 一郎",
        industry: "小売",
        revenue: "30億円",
        survey1: "③ITインフラ周辺の課題",
        survey2: "予算不足が原因で進まない",
      },
      {
        id: 4,
        date: "2024-12-13 09:00",
        company: "株式会社D",
        department: "情シス",
        position: "主任",
        representative: "山田 花",
        industry: "教育",
        revenue: "20億円",
        survey1: "①基幹システム、業務システム周辺の課題",
        survey2: "社内統制が課題",
      },
      {
        id: 5,
        date: "2024-12-14 13:00",
        company: "株式会社E",
        department: "経営企画",
        position: "課長代理",
        representative: "高橋 光",
        industry: "金融",
        revenue: "200億円",
        survey1: "②データ管理と活用の課題",
        survey2: "データの一元化が進まない",
      },
      {
        id: 6,
        date: "2024-12-15 11:00",
        company: "株式会社F",
        department: "マーケティング",
        position: "部長",
        representative: "斉藤 健",
        industry: "広告",
        revenue: "150億円",
        survey1: "①基幹システム、業務システム周辺の課題",
        survey2: "データ分析環境の整備が必要",
      },
      {
        id: 7,
        date: "2024-12-16 15:00",
        company: "株式会社G",
        department: "DX部",
        position: "課長",
        representative: "中村 美咲",
        industry: "製造",
        revenue: "300億円",
        survey1: "③ITインフラ周辺の課題",
        survey2: "セキュリティ課題が多い",
      },
      {
        id: 8,
        date: "2024-12-17 13:30",
        company: "株式会社H",
        department: "情シス",
        position: "係長",
        representative: "石田 陽子",
        industry: "教育",
        revenue: "80億円",
        survey1: "②データ管理と活用の課題",
        survey2: "共有データの整理が必要",
      },
      {
        id: 9,
        date: "2024-12-18 10:00",
        company: "株式会社I",
        department: "経営企画",
        position: "主任",
        representative: "佐々木 蓮",
        industry: "IT",
        revenue: "400億円",
        survey1: "①基幹システム、業務システム周辺の課題",
        survey2: "プロジェクト管理が煩雑",
      },
    ];

    setDeals(dummyData);
  };

  // 初回レンダリング時にデータを取得
  useEffect(() => {
    fetchDeals();
  }, []);

  const handleGeneratePreparation = () => {
    if (!selectedDeal) {
      alert("商談を選択してください。");
      return;
    }
        // 選択された商談データをlocalStorageに保存
        const selectedData = deals.find((deal) => deal.id === selectedDeal);
        localStorage.setItem("selectedDeal", JSON.stringify(selectedData));
        // 遷移
        router.push("/suggest");
      };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* サービス名 */}
      <h1 style={{ color: "#1E90FF", fontSize: "24px", marginBottom: "10px" }}>ITtripNavigator</h1>

      {/* 商談管理画面タイトル */}
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>商談管理画面</h2>

      {/* 管理画面テーブル */}
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>選択</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>商談ID</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>商談日時</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>企業名</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>部署名</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>役職</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>担当者名</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>業種業界</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>売上規模</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>アンケート①</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>アンケート②</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal) => (
            <tr
              key={deal.id}
              style={{
                backgroundColor: selectedDeal === deal.id ? "#FFFF99" : "transparent",
              }}
            >
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                <input
                  type="radio"
                  name="selectedDeal"
                  value={deal.id}
                  checked={selectedDeal === deal.id}
                  onChange={() => setSelectedDeal(deal.id)}
                />
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{deal.id}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{deal.date}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{deal.company}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{deal.department}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{deal.position}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{deal.representative}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{deal.industry}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{deal.revenue}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{deal.survey1}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{deal.survey2}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 商談準備を生成ボタン */}
      <div style={{ textAlign: "center" }}>
        <button
          onClick={handleGeneratePreparation}
          style={{
            backgroundColor: "#1E90FF",
            color: "white",
            border: "none",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          商談準備を生成
        </button>
      </div>
    </div>
  );
};

export default SalesManagement;
